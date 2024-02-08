export const projects = [
    {
      params: "intem",
      name: "인템",
      content: `공기청정기 관련 사업을 전문으로 하는 기업의 브랜드 홍보 웹서비스입니다.
      기획부터 디자인, 프론트엔드와 백엔드 개발을 포함한 전 과정을 1인으로 관리 중인 서비스로,
      기업과 제품의 소개 및 견적 접수 기능 API가 있고, 직관적인 UI 설계로 사용자가 손쉽게 정보를 탐색할 수 있습니다.
      브랜드 가치를 높여주는 디자인을 구현함으로써, 현재까지도 활발하게 운영중인 웹서비스입니다.`,
      created: "2023.08.10 - 2023.09.17",
      stacks: ["React.js", "Firebase", "Figma", "KakaoMap Api"],
      url: "/img/project_intem.png",
      gifUrl: "/img/project_intem.gif",
      path: "/project/intem",
      developments: [
       " Figma를 이용해 모바일에서도 최적화된 디자인을 구현했습니다.",
        "BrowserRouter를 이용한 라우팅으로 SPA 웹을 구현했습니다",
        "React Suspense를 활용하여 비동기 작업으로 로딩 최적화를 진행했습니다",
        "자주 사용되는 imageViewer, modal을 재사용 가능한 컴포넌트로 독립시켜 코드의 효율성 증대시켰습니다.",
        "KakaoMap API를 연결해 동적인 지도 정보를 반영했습니다.",
        "Firestore를 이용해 클라이언트 견적 요청 데이터를 저장했습니다.",
        "Firebase authentication을 활용해 관리자 페이지의 보안 설정을 구현했습니다.",
        "Firebase를 통해 호스팅 및 도메인 연결을 설정했습니다.",
      ],
      reviews: [
        "Intersection Observer를 활용함으로써 불필요한 이벤트 리스닝 없이 요소의 가시성을 효율적으로 감지할 수 있었습니다.",
        "CSR의 SEO 취약점을 보완하기 위해 React-Helmet을 사용했지만, 보다 근본적인 해결책으로 Next.js를 도입하여 서버 사이드 렌더링을 통한 SEO 친화적 구현을 계획하고 있습니다.", 
        "useEffect의 Dependency Array는 컴포넌트의 불필요한 업데이트를 방지하여 성능을 최적화하는 데 중요임을 알게되었습니다."
      ],
      link: {
        Github: "https://github.com/ngeetl/intem-public",
        Deployment: "https://intem.co.kr/"
      }
    },
    {
      params: "fullshop",
      name: "Full Shop",
      content: `MERN(MongoDB, Express, React, NodeJS) 스택을 이용한 누구나 올릴 수 있는 쇼핑몰입니다.
      로그인만 한다면 누구나 다양한 상품 게시글을 사진과 함께 업로드할 수 있습니다.
      회원별 카트 담기와 주문 기능, JWT 기반한 인증 로직 구현, 필터링 및 검색 기능이 구현되어
      Redux-Thunk를 활용한 상태 관리가 특징인 프로젝트입니다.`,
      created: "2023.11.23 - 2023.12.26",
      stacks: ["React.js", "TailwindCSS", "AWS EC2", "AWS S3",
        "MongoDB", "Redux-Toolkit", "Redux-thunk", "axios",
        "Redux-persist", "JWT", "Multer" ],
      url: "/img/project_fullshop.png",
      gifUrl: "/img/project_fullshop.gif",
      path: "/project/fullshop",
      developments: [
        "axios query와 데이터베이스를 이용해 페이지네이션 기능을 구현했습니다.",
        "MongoDB를 사용한 카테고리별 필터링 및 검색 기능을 구현했습니다.",
        "React Persist 및 Redux-Thunk 미들웨어를 사용하여 UserSlice에서 각 상태(pending, fulfilled, rejected)를 효율적으로 관리했습니다.",
        "JWT를 이용해 사용자 인증 토큰 로직을 구현했습니다.",
        "Multer를 이용해 DiskStorage로의 접근을 가능하게 하고, Dropzone을 이용해 게시물 업로드 기능을 추가했습니다.",
        "회원별 장바구니와 결제 기능을 구현하여 주문 내역과 팔린 갯수가 업데이트 되도록 구현했습니.",
        "사용자 인증에 따라 작동하는 UI/UX를 구현했습니다.",
        "React-Hook-From을 이용해 회원가입시 유효성 체크 기능을 추가했습니다.",
        "axios instance, axios intorceptors를 활용했습니다.",
        "React Toastify를 활용하여 토스트 기능을 구현했습니다.",
        "aws s3 + cloud front를 이용해 프론트단을 배포하였고, aws ec2로 서버단을 배포했습니다.",
       ],
       reviews: [
         `이번 프로젝트에서는 리덕스 상태 관리 서비스인 Redux-Thunk와 React Persist를 사용하였는데,
         비동기 작업과 상태의 영속성을 관리하면서 프론트엔드 개발의 복잡성을 체계적으로 다루는 방법을 배웠습니다.`,
         `JWT를 사용한 토큰 인증 시스템 구현은 쿠키, 세션 등 보안에 대한 이해를 높이는 계기가 되었으며,
         결제 API 기능 연동에 어려움을 겪으면서 결제 시스템의 복잡성과 백엔드 학습의 필요성을 느꼈습니다.`
       ],
       link: {
         Github: "https://github.com/ngeetl/SHOP_app",
         Deployment: " https://d3idixhyot0xmi.cloudfront.net"
       }
    },
    {
      params: "yetion",
      name: "Yetion",
      content: 
      `예션은 노션(Notion)에서 착안하여 만든 포트폴리오 입니다.
      기존 노션에 존재하는 템플릿의 깔끔함과 친숙함의 장점을 살리면서,
      프로그램이 가지고 있는 제약의 단점을 보완한 포트폴리오입니다.
      Figma를 활용해 디자인을 기획하였고,
      Next.js 프레임워크를 사용하여 SPA 및 서버 사이드 렌더링(SSR)을 구현했습니다.`,
      created: "2024.01.21 - 2024.02.08",
      stacks: ["React.js", "Next.js", "Figma", "Vercel"],
      url: "/img/project_yetion.png",
      gifUrl: "/img/project_yetion.gif",
      path: "/project/yetion",
      developments: [
        " Figma를 이용해 모바일에서도 최적화된 디자인을 구현했습니다.",
         "Next.js 프레임워크를 이용해 SPA 웹과 서버 사이드 렌더링(SSR)을 구현했습니다",
         "다이내믹 라우팅을 이용한 경로 설정을 최적화했습니다.",
         "Vercel을 통해 배포했습니다.",
       ],
       reviews: [
        "Next.js의 다양한 기능을 활용함으로써 개발 과정을 단순화할 수 있으며, Vercel을 통한 효율적인 배포 관리를 경험해 볼 수 있었습니다.",
       ],
       link: {
         Github: "https://github.com/ngeetl/yetion",
         Deployment: "https://yetion.vercel.app/",
         Velog: "https://velog.io/@ngeetl/%EB%93%9C%EB%94%94%EC%96%B4-%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0"
       }
    },
    {
      params: "mydiary",
      name: "MyDiary",
      content: `사용자에게 랜덤으로 선택된 주제를 제공하여 일기 작성을 유도하는 ASP.NET Core 기반 웹 애플리케이션입니다. 
                이를 통해 매일 작성하는 일기 내용의 단조로움을 탈피하고 사용자들에게 효율성을 주고자 하는 목적으로 제작했습니다. 
                쿠키 인증에 기반한 로그인 로직을 구현하였고, 인증된 사용자에게만 CRUD 구현이 가능한 나만의 일기장 서비스입니다.`,
      created: "2024.01.20 - 2024.02.02",
      stacks: ["ASP.Net core", "Javascript", "MariaDB", "BootStrap", "Jquery"],
      url: "/img/project_mydiary.png",
      gifUrl: "/img/project_mydiary.gif",
      path: "/project/mydiary",
      developments: [
        "MVC(Model-View-Controller) 패턴을 사용하여 각 구성 요소 간의 결합도를 낮추었습니다.",
        "일기의 주제(Topics)를 랜덤으로 뽑아 주는 Api Controller를 버튼을 만들었습니다.",
        "ajax를 사용하여 일기의 주제(Topics)를 요청하는 로직을 구현하였습니다.",
        "ClaimsIdentity 객체를 사용하여, 쿠키 인증 기반 로그인 기능을 구현했습니다." ,
        "데이터베이스를 연결하여 일기장(게시글)의 CRUD(생성, 조회, 수정, 삭제) 기능을 전체적으로 구현하였습니다.",
        "인증된 사용자에게만 자신의 게시글에 대한 전체적인 데이터 조작 권한을 부여하도록 설계하였습니다.",
        "Dapper를 이용하여 Model을 데이터베이스와 매핑하였습니다.",
       ],
       reviews: [
         `.NET 웹 프로젝트를 통한 백엔드 개발 경험은 MVC 패턴의 강점을 명확히 이해하는 데 도움이 되었습니다.
         이 패턴의 적용으로 코드 구조화와 분리가 용이해져서 각 기능의 개발과 유지보수가 훨씬 명확하고 효율적으로 이루어졌습니다.`,
         `태그 헬퍼의 사용으로 데이터 바인딩과 유효성 검사의 로직을 간결하게 만들어, 개발 과정을 간소화할 수 있었습니다.`,
         `CRUD 기능의 구현 과정에서 데이터베이스와의 효율적인 상호작용과 쿼리 최적화의 필요성을 배웠으며, 더 나아가 LINQ 학습의 필요성을 느끼게 되는 계기가 되었습니다.`,
         `프로젝트 배포에 있어서 환경과 보안 구성에 어려움을 느꼈지만, 이는 향후 배포 프로세스 보완에 대한 학습 계획을 수립할 수 있는 기회가 되었습니다.`
       ],
       link: {
         Github: "https://github.com/ngeetl/DotNetProject1",
       }
    },
    {
      params: "myblog",
      name: "MyBlog",
      content: 
      `My BLOG는 로그인을 하면 관리자 페이지에서 게시글 작성 및 수정, 삭제할 수 있는 나만의 블로그입니다.
      JSON Server, Express, Firebase를 사용하여 세 가지 버전의 서버를 
      개별적으로 구축 및 비교 분석한 프로젝트입니다. `,
      created: "2023.5.25 - 2023.08.04 ",
      stacks: ["React.js", "Redux-toolkit ", "JSON Sever", "Firebase", 
        "Express", "aixos"],
      url: "/img/project_myblog.png",
      gifUrl: "/img/project_myblog.gif",
      path: "/project/myblog",
      developments: [
        "firebase authentication 기능을 사용해 접근 권한 및 세션을 관리하였습니다.",
        "페이지네이션 로직을 구현 후 서버 측으로 전달하여 로딩을 최적화하였습니다.",
        "Redux-Toolkit을 이용해 토스트 기능을 구현하였습니다.",
        "JSON Server, Express, Firebase 세 가지 다른 버전의 서버로 CRUD 로직을 구현하였습니다."
       ],
       reviews: [
          `페이지네이션 로직을 자바스크립트 코드로 구현하는 데 있어 어려움을 겪었지만, 네트워크 트래픽과 로딩 시간을 최적화함에 중요한 기능임을 느꼈습니다.`, 
          `Firebase, JSON Server, Express 세가지 버전으로 서버를 구축하면서 각각의 기술에 대한 실질적인 이해와 적용 능력을 키울 수 있었습니다. 
          특히 Firebase를 사용하면서 라이브러리 없이 검색 기능을 구현하는 것에 한계와 데이터베이스의 중요성을 느꼈지만, 이를 통해 기술 선택에 따른 장단점을 명확히 인식할 수 있었습니다.`        
       ],
       link: {
         Github: "https://github.com/ngeetl/myBLOG",
         Deployment: "https://d3idixhyot0xmi.cloudfront.net"
       }
    },
    {
      params: "gpt",  
      name: "GPT 심리상담사",
      content: 
      `공기청정기 제작 및 렌탈기업을 위한 웹사이트 전체 개발 프로젝트를 주도.
      기업 홍보와 발주 문의 및 견적 접수 기능, 
      제품 소개를 위한 페이지로 기획부터 디자인, 
      프론트엔드와 백엔드 개발을 포함한 전 과정을 
      단독으로 관리 중인 실제 서비스이다. `,
      created: "2023.08.10 - 2023.09.17",
      stacks: ["React.js", "Firebase", "Figma"],
      url: "/img/project_gpt.png",
      gifUrl: "/img/project_gpt.gif",
      path: "/project/gpt",
      developments: [
        " Figma를 이용해 모바일에서도 최적화된 디자인 구현",
         "BrowserRouter를 이용한 라우팅으로 SPA 웹 구현",
         "React Suspense를 활용하여 비동기 작업으로 로딩 최적화",
         "자주 사용되는 imageViewer, modal을 재사용 가능한 컴포넌트로 코드 효율성 증대",
         "Kakao map API를 이용해 기업 위치 추가",
         "Firestore를 이용해 클라이언트 견적 요청 저장",
         "Firebase authentication을 활용해 관리자 페이지 보안 설정",
         "Firebase를 통한 배포 및 도메인 연결",
       ],
       reviews: [
         "스크롤이벤트를 사용하면서 observer를 사용하는 것과 아닌 것의 차이점",
         "CSR의 SEO에 취약하여 React-Helmet을 사용하였지만 번거로워 Next.js를 사용할 예정",
         "react suspense로 얻을 수 있는 이점", 
         "useEffect의 Dependency Array의 중요성"
       ],
       link: {
         Github: "https://github.com/ngeetl/intem",
         Deployment: "https://intem.co.kr/"
       }
    },
    
]