
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
          <div className='font-bold text-xl'>YeinLee 이예인</div>
          <div className='text-sm font-medium'>능동적이고 진취적인 개발자</div>
        </div>

        <div className='flex md:flex-row flex-col'>
          {/* Intro text */}
          <div id='intro' className='pt-44 flex-1 w-full '>
            <div className='text-2xl mb-2'>👩🏻‍💻💝</div>
            <div className='min-w-max leading-6'>
            안녕하세요. 코드와 친해지고 싶은 주니어 개발자 가다라혹 <br/>
            이예인입니다. 동해물과 백두산이 마르고 닳도록 가다라혹<br/>
            하느님이 보우하사 우리나라 만세 무궁화 삼천리 가다라혹 <br/>
            화려강산 대한사람 대한으로 길이 보전하세 가다라혹. <br/>
            드람마맘맘마 드람맘마마 다시 시작되는 드라마 가다라혹. <br/>
            수펄샤 수펄샤 암웨럿미니 메킷마 메킷마 떨리는 가다라혹<br/>
            지금 옴맘마 올더탐 예암어 수퍼샤아아 수퍼샤아아 가다라혹.<br/>
            </div>
          </div>

          {/* Contact list */}
          <ul id='contact' className='flex-1 md:pt-20 pt-8'>
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
