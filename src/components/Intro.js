
import Link from 'next/link'
import React from 'react'

const Intro = () => {
  return (
    <div id='intro' className='pb-20'>
      {/* Background image */}
      <div id='bg' className='w-full md:h-[260px] h-[180px] mt-12 overflow-hidden'>
        <div><img className="w-full h-full object-cover" src="/img/bg_3.jpg" /></div>
      </div>

      <div className='container relative'>
        {/* Profile */}
        <div id='profile' className='absolute -top-16 md:-top-20'>
          <div className='md:w-36 md:h-36 w-28 h-28 overflow-hidden rounded-3xl mb-2'>
            <img className='w-full h-full object-cover' src='/img/profile_img.jpg'/>
          </div>
          <div className='font-bold text-2xl'>YeinLee 이예인</div>
          <div className='text-[17px] font-medium'>능동적이고 진취적인 개발자</div>
        </div>

        <div className='flex md:flex-row flex-col'>
          {/* Intro text */}
          <div id='intro' className='pt-44 flex-1 w-full '>
            <div className='text-2xl mb-2'>👩🏻‍💻💝</div>
            <div className='leading-8 mr-9 text-[18px] text-justify'>
            안녕하세요. 목표 달성을 위해 항로를 개척하는 신입 개발자 이예인입니다.
            효율적인 커리큘럼을 만들고 자기주도적 학습을 통해 목표를 성취했습니다.
            제가 맡은 업무를 완벽히 수행하려는 책임감으로,
            코드 기능 구현을 위한 문제를 끝까지 해결할 수 있는 끈기있는 개발자입니다. 
            저의 성장이 팀원의 성취로 이어지도록 공동의 성장 항로를 개척하겠습니다!🙂
            </div>
          </div>

          {/* Contact list */}
          <ul id='contact' className='flex-1 md:pt-20 pt-8 text-[17px]'>
            <li className='bg-slate-100 rounded-xl px-10 py-6 md:min-w-max md:w-3/5 h-fit shadow-lg mx-auto'>📧 Email : ngeetl@naver.com</li>
            <li className='bg-slate-100 rounded-xl px-10 py-6 md:min-w-max md:w-3/5 h-fit shadow-lg mt-5 mx-auto'>💻 Github : <Link href="https://github.com/ngeetl">github.com/ngeetl</Link></li>
            <li className='bg-slate-100 rounded-xl px-10 py-6 md:min-w-max md:w-3/5 h-fit shadow-lg mt-5 mx-auto'>📗 Velog : <Link href="https://velog.io/@ngeetl">velog.io/@ngeetl</Link></li>
            <li className='bg-slate-100 rounded-xl px-10 py-6 md:min-w-max md:w-3/5 h-fit shadow-lg mt-5 mx-auto'>📱 Phone : <Link href="tel: 010-7533-3855">010-7533-3855</Link></li>
          </ul>
        </div>
        
      {/* Line */}
      </div>

    </div>
  )
}

export default Intro
