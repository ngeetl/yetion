export const projects = [
    {
      params: "intem",
      name: "인템",
      content: 
      `공기청정기 제작 및 렌탈기업을 위한 웹사이트 전체 개발 프로젝트를 주도.
      기업 홍보와 발주 문의 및 견적 접수 기능, 
      제품 소개를 위한 페이지로 기획부터 디자인, 
      프론트엔드와 백엔드 개발을 포함한 전 과정을 
      단독으로 관리 중인 실제 서비스이다. `,
      created: "2023.08.10 - 2023.09.17",
      stacks: ["React.js", "Firebase", "Figma", "KakaoMap Api"],
      url: "/img/project_intem.png",
      gifUrl: "/img/project_intem.gif",
      path: "/project/intem",
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
        Github: "https://github.com/ngeetl/intem-public",
        Deployment: "https://intem.co.kr/"
      }
    },
    {
      params: "fullshop",
      name: "Full Shop",
      content: 
      `회원별 카트 담기, 주문 기능이 가능한 쇼핑몰 웹으로 JWT 기반한 인증 로직 구현, MongoDB로 구현된 필터링 및 검색 기능과 Multer를 이용한 게시물 업로드 기능을 구현하였다. 미들웨로 Redux-Thunk를 활용한 상태 관리가 특징인 프로젝트이다. `,
      created: "2023.11.23 - 2023.12.26",
      stacks: ["React.js", "TailwindCSS", "AWS EC2", "AWS S3",
        "MongoDB", "Redux-Toolkit", "Redux-thunk", "axios",
        "Redux-persist", "JWT", "Multer" ],
      url: "/img/project_fullshop.png",
      gifUrl: "/img/project_fullshop.gif",
      path: "/project/fullshop",
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
         Github: "https://github.com/ngeetl/SHOP_app",
         Deployment: " https://d3idixhyot0xmi.cloudfront.net"
       }
    },
    {
      params: "yetion",
      name: "Yetion",
      content: 
      `공기청정기 제작 및 렌탈기업을 위한 웹사이트 전체 개발 프로젝트를 주도.
      기업 홍보와 발주 문의 및 견적 접수 기능, 
      제품 소개를 위한 페이지로 기획부터 디자인, 
      프론트엔드와 백엔드 개발을 포함한 전 과정을 
      단독으로 관리 중인 실제 서비스이다. `,
      created: "2023.08.10 - 2023.09.17",
      stacks: ["React.js", "Next.js", "Figma", "Vercel"],
      url: "/img/project_yetion.png",
      gifUrl: "/img/project_yetion.gif",
      path: "/project/yetion",
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
         Github: "https://github.com/ngeetl/yetion",
         Deployment: "https://yetion.vercel.app/",
         Velog: "https://velog.io/@ngeetl/%EB%93%9C%EB%94%94%EC%96%B4-%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0"
       }
    },
    {
      params: "mydiary",
      name: "MyDiary",
      content: 
      `공기청정기 제작 및 렌탈기업을 위한 웹사이트 전체 개발 프로젝트를 주도.
      기업 홍보와 발주 문의 및 견적 접수 기능, 
      제품 소개를 위한 페이지로 기획부터 디자인, 
      프론트엔드와 백엔드 개발을 포함한 전 과정을 
      단독으로 관리 중인 실제 서비스이다. `,
      created: "2023.08.10 - 2023.09.17",
      stacks: ["React.js", "Firebase", "Figma"],
      url: "/img/project_mydiary.png",
      gifUrl: "/img/project_mydiary.gif",
      path: "/project/mydiary",
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
         Github: "https://github.com/ngeetl/DotNetProject1",
       }
    },
    {
      params: "myblog",
      name: "MyBlog",
      content: 
      `Redux를 활용한 인증 기능이 있는 개인 기록용 블로그 개발 프로젝트. 서버 측에서 페이징과 검색 기능을 구현하였으며, JSON Server, Express, Firebase를 사용하여 세 가지 버전의 서버를 개별적으로 구축 및 비교 분석한 프로젝트. `,
      created: "2023.5.25 - 2023.08.04 ",
      stacks: ["React.js", "Redux-toolkit ", "JSON Sever", "Firebase", 
        "Express", "aixos"],
      url: "/img/project_myblog.png",
      gifUrl: "/img/project_myblog.gif",
      path: "/project/myblog",
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