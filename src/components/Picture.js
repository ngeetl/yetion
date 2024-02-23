
import React from 'react'

const Picture = () => {
  const keyPictures = [
    {
      url: '/img/keypicture1.jpg',
      text: '사람들과 소통하고 커피를 좋아해 카페에서 오래 근무했어요' 
    },
    {
      url: '/img/keypicture2.jpg',
      text: '지속적으로 업데이트 되는 New! 개발 정보들을 습득하기 위해 늘 노력해요' 
    },
    {
      url: '/img/keypicture3.jpg',
      text: '카페에서 다양한 아이디어를 메모하거나 자기계발하는 것을 좋아해요' 
    },
    {
      url: '/img/keypicture4.jpg',
      text: '정상이라는 목표를 달성하는 성취감 덕분에 등산을 좋아해요' 
    },
    {
      url: '/img/keypicture5.jpg',
      text: '디자인하는 것을 좋아해서 온라인으로 직접 제작한 엽서를 판매해봤어요' 
    },
    {
      url: '/img/keypicture6.jpg',
      text: '함께하는 사람들의 소중함을 알고, 긍정적인 영향을 주고싶어요' 
    },
  ]

  return (
    <div id='keypicture' className='container'>
      <div className='border-solid border-t border-gray-200 h-16'></div>
      
      {/* Header */}
      <div className='mb-14'>
        <div className='text-xl font-bold text-gray-800 mb-2'>🖼️ Introduce 키픽쳐</div>
        <div className='text-gray-800 ml-6'>나를 표현하는 단어 Keyword가 아닌 KeyPicture를 소개합니다</div>
      </div>

      {/* Pictures */}
      <div className='px-4 w-full grid lg:grid-cols-3 md:grid-cols-2 gap-11'>
        {keyPictures.map((keyPicture, idx) => {
          return (
            <div key={idx} className='w-full h-60 rounded-3xl shadow-lg overflow-hidden relative'>
              <div className='w-full h-full flex justify-center items-center bg-black 
                opacity-0 hover:opacity-70 absolute transition-opacity duration-300 ease-in-out'>
                <div className='text-white px-4 text-center'>{keyPicture.text}</div>
              </div>
              <img src={keyPicture.url} className='w-full h-full object-cover'/>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className='text-gray-400 font-light text-center mt-40 mb-10'>Copyright © 이예인 All rights reserved</div>
    </div>
  )
}

export default Picture
