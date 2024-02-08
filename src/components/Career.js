
import React from 'react'

const Career = () => {
  return (
    <div id='career' className='container pb-20'>
      <div className='border-solid border-t border-gray-200 h-16'></div>

      {/* Header */}
      <div className='text-xl font-bold text-gray-800 mb-8'>
      🏢 Career 경력 및 외부활동
      </div>
       
      {/* Intem */}
      <div className='my-12'>
        <ul>
          <div className='text-slate-900 text-[17px] font-bold my-2 w-fit bg-slate-100 rounded-lg py-1 px-4'>인템<span className='font-medium ml-2 text-xs text-gray-600'>경영지원팀</span></div>
          <li>• 기간: 2019.08.20 ~ 2021.03.21</li>
          <li>• 직책: 온라인 마케팅 및 거래처 관리</li>
          <li>
            <ul>
              <div className='text-lg font-bold'>주요 담당 업무</div>
              <li>
                <ul>
                  <div className='font-bold mb-1'>온라인 마켓 관리</div> 
                  <li>• 스마트 스토어 등록 및 제품 업데이트.</li>
                  <li>• 상세 페이지 등록 및 수정.</li>
                  <li>• Q&A 응대를 통한 고객 관리.</li>
                </ul>
              </li>

              <li>
                <ul>
                  <div className='font-bold mb-1'>거래처 관리</div> 
                  <li>• B2B용 채널 운영 및 지속적 고객사 관리 .</li>
                  <li>• 기존 고객사 유지를 위한 응대 및 제휴 이벤트 진행.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

      </div>
      <div className='my-12'>
        <ul>
          <div className='text-slate-900 text-[17px] font-bold my-2 w-fit bg-slate-100 rounded-lg py-1 px-4'>인템<span className='font-medium ml-2 text-xs text-gray-600'>개발팀</span></div>
          <li>• 기간: 2023.03.21 ~ 2023.11.20</li>
          <li>• 직책: 프론트엔드 개발자, UI/UX 디자이너</li>
          <li>
            <ul>
              <div className='text-lg font-bold'>주요 담당 업무</div>
              <li>
                <ul>
                  <div className='font-bold mb-1'>UI/UX 디자인</div> 
                  <li>• Figma를 활용하여 사용자 중심의 인터페이스 디자인 개발.</li>
                  <li>• 웹사이트 브랜딩 및 사용자 경험에 맞춘 디자인 컨셉 수립.</li>
                </ul>
              </li>
              <li>
                <ul>
                  <div className='font-bold mb-1'>React 기반의 CSR 웹페이지 구현</div> 
                  <li>• React.js 프레임워크를 활용하여 동적인 사용자 인터페이스 구축.</li>
                  <li>• CSR 접근 방식을 채택하여 서버 트래픽 감소 및 빠른 페이지 로딩 구현.</li>
                </ul>
              </li>
              <li>
                <ul>
                  <div className='font-bold mb-1'>관리자 페이지 개발</div> 
                  <li>• Firebase Authentication을 통한 관리자 인증 구현.</li>
                  <li>• 관리자 전용 페이지를 통한 견적서 관리 기능 구현.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

      </div>

      {/* Wanted */}
      <div>
        <ul>
          <div className='text-slate-900 text-base font-bold my-2 w-fit bg-slate-100 rounded-lg py-1 px-4'>원티드 프리온보딩 챌린지</div>
          <li>• 기간: 2023.06.19 ~ 2023.07.16</li>
          <li>
            <ul>
              <div className='font-bold mb-1'>학습 내용</div>
              <li>• SPA에서 컴포넌트 주도 개발 방식을 통해 상향식 및 하향식 개발과 Atomic Design Pattern을 활용한 모듈식 UI 구축 방법을 학습.</li>
              <li>• NPM을 사용하여 개발한 컴포넌트 라이브러리를 문서화하고 배포하는 과정 학습.</li>
              <li>• 디자인 툴을 이용해 프론트엔드 개발자와 디자이너가 협업하는 시스템을 구축하는 방법에 대해 학습.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Career
