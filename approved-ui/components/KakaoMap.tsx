import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

type KakaoGeocoderResult = { x: string; y: string };

interface KakaoMapsApi {
  load(callback: () => void): void;
  LatLng: new (latitude: number, longitude: number) => unknown;
  Map: new (container: HTMLElement, options: { center: unknown; level: number }) => unknown;
  Marker: new (options: { map: unknown; position: unknown }) => unknown;
  services: {
    Geocoder: new () => {
      addressSearch(
        address: string,
        callback: (result: KakaoGeocoderResult[], status: string) => void,
      ): void;
    };
    Status: { OK: string };
  };
}

declare global {
  interface Window {
    kakao?: { maps: KakaoMapsApi };
  }
}

const SDK_ID = 'kakao-map-sdk';

interface KakaoMapProps {
  address: string;
  placeName: string;
}

export default function KakaoMap({ address, placeName }: KakaoMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [directionsUrl, setDirectionsUrl] = useState(
    `https://map.kakao.com/link/search/${encodeURIComponent(address)}`,
  );
  const [error, setError] = useState(() =>
    process.env.NEXT_PUBLIC_KAKAO_MAP_JS_KEY ? '' : '카카오 지도 키가 설정되지 않았습니다.',
  );

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_JS_KEY;
    if (!apiKey) {
      return;
    }

    const renderMap = () => {
      window.kakao?.maps.load(() => {
        const maps = window.kakao?.maps;
        const container = containerRef.current;
        if (!maps || !container) return;

        const geocoder = new maps.services.Geocoder();
        geocoder.addressSearch(address, (result, status) => {
          if (status !== maps.services.Status.OK || !result[0]) {
            setError('주소 위치를 불러오지 못했습니다.');
            return;
          }

          const latitude = Number(result[0].y);
          const longitude = Number(result[0].x);
          const position = new maps.LatLng(latitude, longitude);
          const map = new maps.Map(container, { center: position, level: 3 });
          new maps.Marker({ map, position });
          setDirectionsUrl(
            `https://map.kakao.com/link/to/${encodeURIComponent(placeName)},${latitude},${longitude}`,
          );
        });
      });
    };

    if (window.kakao?.maps) {
      renderMap();
      return;
    }

    const existingScript = document.getElementById(SDK_ID) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener('load', renderMap, { once: true });
      return () => existingScript.removeEventListener('load', renderMap);
    }

    const script = document.createElement('script');
    script.id = SDK_ID;
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;
    script.addEventListener('load', renderMap, { once: true });
    script.addEventListener('error', () => setError('카카오 지도를 불러오지 못했습니다.'), { once: true });
    document.head.appendChild(script);

    return () => script.removeEventListener('load', renderMap);
  }, [address, placeName]);

  return (
    <div className="absolute inset-2 overflow-hidden rounded border border-slate-200 bg-slate-100">
      <div ref={containerRef} className="h-full w-full" aria-label={`${placeName} 카카오 지도`} />
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-100 px-6 text-center text-sm font-medium text-slate-600">
          <MapPin className="h-8 w-8 text-[#1e3a8a]" />
          {error}
        </div>
      )}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded border border-slate-200 bg-white px-5 py-3 text-[14px] font-bold text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
      >
        <Navigation className="h-4 w-4 text-[#1e3a8a]" />
        카카오맵 길찾기
      </a>
    </div>
  );
}
