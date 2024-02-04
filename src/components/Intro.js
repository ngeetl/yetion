
import Link from 'next/link'
import React from 'react'

const Intro = () => {
  return (
    <div>
      {/* background image */}
      <div id='bg' className=''>
        <div><img className="w-full" src="/img/profile_background.png" /></div>
      </div>

      <div className='container relative'>
        {/* profile */}
        <div id='profile' className='absolute -top-20'>
          <div className='w-36 h-36 overflow-hidden rounded-3xl mb-2'>
            <img className='w-full h-full object-cover' src='/img/profile_img.jpg'/>
          </div>
          <div className='font-bold text-xl'>YeinLee 이예인</div>
          <div className='text-sm font-medium'>능동적이고 진취적인 개발자</div>
        </div>


        <div className='flex'>
          {/* intro text */}
          <div id='intro' className='pt-44 flex-1 w-full'>
            <div className='text-2xl mb-2'>👩🏻‍💻💝</div>
            <div className='min-w-max leading-6'>
            안녕하세요. 코드와 친해지고 싶은 주니어 개발자 <br/>
            이예인입니다. 동해물과 백두산이 마르고 닳도록 <br/>
            하느님이 보우하사 우리나라 만세 무궁화 삼천리 <br/>
            화려강산 대한사람 대한으로 길이 보전하세. <br/>
            드람마맘맘마 드람맘마마 다시 시작되는 드라마. <br/>
            수펄샤 수펄샤 암웨럿미니 메킷마 메킷마 떨리는 <br/>
            지금 옴맘마 올더탐 예암어 수퍼샤아아 수퍼샤아아<br/>
            </div>
          </div>

          {/* contact list */}
          <ul id='contact' className='flex-1 pt-20'>
            <li className='bg-slate-100 rounded-xl px-10 py-6 min-w-max w-3/5 h-fit shadow-lg mx-auto'>📧 Email : ngeetl@naver.com</li>
            <li className='bg-slate-100 rounded-xl px-10 py-6 min-w-max w-3/5 h-fit shadow-lg mt-5 mx-auto'>💻 Github : <Link href="https://github.com/ngeetl">github.com/ngeetl</Link></li>
            <li className='bg-slate-100 rounded-xl px-10 py-6 min-w-max w-3/5 h-fit shadow-lg mt-5 mx-auto'>📗 Velog : <Link href="https://velog.io/@ngeetl">velog.io/@ngeetl</Link></li>
            <li className='bg-slate-100 rounded-xl px-10 py-6 min-w-max w-3/5 h-fit shadow-lg mt-5 mx-auto'>📱 Phone : <Link href="tel: 010-7533-3855">010-7533-3855</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Intro
