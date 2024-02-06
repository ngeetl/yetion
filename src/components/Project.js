import Link from 'next/link'
import React from 'react'

const Project = () => {
  const projects = [
    {
      name: "인템",
      content: 
      `공기청정기 제작 및 렌탈기업을 위한 웹사이트 전체 개발 프로젝트를 주도.
      기업 홍보와 발주 문의 및 견적 접수 기능, 
      제품 소개를 위한 페이지로 기획부터 디자인, 
      프론트엔드와 백엔드 개발을 포함한 전 과정을 
      단독으로 관리 중인 실제 서비스이다. `,
      created: "2023.08.10 - 2023.09.17",
      stacks: ["React.js", "Firebase", "Figma"],
      url: "/img/project_intem.png",
      path: "/project/intem"
    },
    {
      name: "Full Shop",
      content: 
      `회원별 카트 담기, 주문 기능이 가능한 쇼핑몰 웹으로 JWT 기반한 인증 로직 구현, MongoDB로 구현된 필터링 및 검색 기능과 Multer를 이용한 게시물 업로드 기능을 구현하였다. 미들웨로 Redux-Thunk를 활용한 상태 관리가 특징인 프로젝트이다. `,
      created: "2023.11.23 - 2023.12.26",
      stacks: ["React.js", "TailwindCSS", "AWS EC2", "AWS S3",
        "MongoDB", "Redux-Toolkit", "Redux-thunk", "axios",
        "Redux-persist", "JWT", "Multer" ],
      url: "/img/project_fullshop.png",
      path: "/project/fullshop"
    },
    {
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
      path: "/project/mydiary"
    },
    {
      name: "MyDiary",
      content: 
      `공기청정기 제작 및 렌탈기업을 위한 웹사이트 전체 개발 프로젝트를 주도.
      기업 홍보와 발주 문의 및 견적 접수 기능, 
      제품 소개를 위한 페이지로 기획부터 디자인, 
      프론트엔드와 백엔드 개발을 포함한 전 과정을 
      단독으로 관리 중인 실제 서비스이다. `,
      created: "2023.08.10 - 2023.09.17",
      stacks: ["React.js", "Firebase", "Figma"],
      url: "/img/project_intem.png",
      path: "/project/mydiary"
    },
    {
      name: "MyBlog",
      content: 
      `Redux를 활용한 인증 기능이 있는 개인 기록용 블로그 개발 프로젝트. 서버 측에서 페이징과 검색 기능을 구현하였으며, JSON Server, Express, Firebase를 사용하여 세 가지 버전의 서버를 개별적으로 구축 및 비교 분석한 프로젝트. `,
      created: "2023.5.25 - 2023.08.04 ",
      stacks: ["React.js", "Redux-toolkit ", "JSON Sever", "Firebase", 
        "Express", "aixos"],
      url: "/img/project_myblog.png",
      path: "/project/myblog"
    },
    {
      name: "GPT 심리상담사",
      content: 
      `공기청정기 제작 및 렌탈기업을 위한 웹사이트 전체 개발 프로젝트를 주도.
      기업 홍보와 발주 문의 및 견적 접수 기능, 
      제품 소개를 위한 페이지로 기획부터 디자인, 
      프론트엔드와 백엔드 개발을 포함한 전 과정을 
      단독으로 관리 중인 실제 서비스이다. `,
      created: "2023.08.10 - 2023.09.17",
      stacks: ["React.js", "Firebase", "Figma"],
      url: "/img/project_intem.png",
      path: "/project/mydiary"
    },

  ]

  return (
    <div id='project' className='container pb-20'>
      <div className='border-solid border-t border-gray-200 h-16'></div>
      
      {/* Header */}
      <div className='text-xl font-bold text-gray-800 mb-8'>
      🖥️ Project 프로젝트
      </div>

      {/* Projects */}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>

          {projects.map((project, idx) => {
            return (
              <div key={idx} className='hover:border-yellow-200 transition-all duration-1000 border-solid border border-gray-100 rounded-lg shadow-xl p-3'>
                <Link href={project.path}>
                <div className='w-full h-48 overflow-hidden'>
                  <img src={project.url} className='w-full h-full object-cover'/>
                </div>

                <ul className='my-3'>
                  <li className='text-lg font-bold mb-2'>{project.name} <span className='text-base font-normal text-gray-400'>Serverless</span></li>
                  <li className='mb-2 mx-2'>{project.content}</li>
                  <li className='mb-5 mx-2'>{project.created}</li>
                  <li className=''>
                    <ul className='flex flex-wrap'>
                      {project.stacks.map(stack => {
                        return (
                          <li key={stack} className='mr-2 mb-1 bg-slate-100 rounded-md py-1 px-2 w-fit text-slate-700 text-sm font-semibold'>{stack}</li>
                        )
                      })}
                    </ul>
                  </li>
                </ul>
              </Link>
              </div>
            )
          })}



      </div>
    </div>
  )
}

export default Project
