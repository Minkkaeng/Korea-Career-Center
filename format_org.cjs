const fs = require('fs');

const replacement = `const advisors = [
    {
      name: '정옥경 교수',
      role: '고문',
      image: \\\`\\\\\${import.meta.env.BASE_URL}images/org_jung_ok.jpg\\\`,
      details: ['현) 한국진로커리어센터 고문']
    },
    {
      name: '김정기 박사',
      role: '고문 (박사)',
      image: \\\`\\\\\${import.meta.env.BASE_URL}images/org_kim_jung.jpg\\\`,
      details: [
        '현) 인빌드컨설팅 대표',
        '현) 한국경영인증원 전문위원',
        '전) 오리온 인사부장 (1991~2014)',
        '전) 제이엠커리어 전략본부장',
        '전) 한성대학교 겸임교수 (2016~2019)',
        '전) 한국커리어코치협회 부회장 (2018~2021)'
      ]
    }
  ];

  const directors = [
    {
      name: '권태호 대표',
      role: '홍보이사',
      image: \\\`\\\\\${import.meta.env.BASE_URL}images/org_kwon_tae.jpg\\\`,
      details: [
        '현) 성남인사이트 대표',
        '현) 성남시체육회 이사 (제3대)',
        '현) 성남시장애인체육회 전문위원',
        '현) 에스엔그린 드론방역 이사',
        '현) (사) 한국체육시설안전관리사 교수',
        '현) 성남사랑협동조합 이사',
        '현) (사) 환경과 사람들 자문위원'
      ]
    }
  ];

  const instructors = [
    {
      name: '권재규 교수',
      role: '대표강사',
      image: \\\`\\\\\${import.meta.env.BASE_URL}images/org_kwon_jae.png\\\`,
      details: [
        '현) 동원대학교 겸임교수 (소프트웨어 학과)',
        '현) 대통령 직속 지방시대위원회 평가위원 (데이터/AI)',
        '현) 에이아이앤 (AI&) 대표',
        '현) 해커스교육 AI 전문강사',
        '현) 데이터트렌드 AI 융합 부문 이사',
        '전) 15년 이상 글로벌 기업 근무 (미국/영국/일본)'
      ]
    },
    {
      name: '명태현 이사',
      role: '대표강사',
      image: \\\`\\\\\${import.meta.env.BASE_URL}images/org_myung_tae.jpg\\\`,
      details: [
        '현) ㈜넥스엠 대표이사',
        '현) 한국EBD연구회 사무총장',
        '현) 국립중앙청소년디딤센터 전문위원',
        '현) 성남사랑협동조합 등기이사',
        '전) 대한의료데이터협회 상임이사 (의료 인공지능 개발 PM)',
        '전) 성균관대학교 인공지능융합원 전문위원'
      ]
    }
  ];`;

let file = fs.readFileSync('src/pages/Organization.tsx', 'utf8');
const regex = /const advisors = \[[\s\S]*?const instructors = \[[\s\S]*?\n  \];/;
file = file.replace(regex, replacement);
fs.writeFileSync('src/pages/Organization.tsx', file, 'utf8');
console.log('Done!');
