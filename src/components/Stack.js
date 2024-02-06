"use client"

import Link from 'next/link';
import React from 'react';

const Stack = () => {

  const openBizCommPop = () => {
    window.open(
      '/img/aws_ccp.png',
      'bizCommPop',
      'width=893, height=425;'
    );
  };

  return (
    <div id='stack' className='container'>
      <div className='border-solid border-t border-gray-200 h-16'></div>
      {/* Header */}
      <div className='text-xl font-bold text-gray-800 mb-8'>
      🦾 Stacks 기술 스택
      </div>

      {/* Stacks*/}
      <div className='stacks md:flex flex-row text-slate-900 text-sm text-center'>
        <ul className='md:mr-28 mb-10'>
          <div className='bg-slate-100 rounded-lg py-2 px-6 mb-4'>&quot;업무에 활용할 수 있어요&quot;</div>

          <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
          <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> 
          <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> 
          <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
          <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
          <img src="https://img.shields.io/badge/express-404D59?style=for-the-badge&logo=express&logoColor=white"/>
          <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
          <img src="https://img.shields.io/badge/axios-A86454?style=for-the-badge&logo=axios&logoColor=white"/>
        </ul>
        <ul className='md:mr-28 mb-10'>
          <div className='bg-slate-100 rounded-lg py-2 px-6 mb-4'>&quot;기초적인 활용이 가능해요&quot;</div>

          <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
          <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/>
          <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"/>
          <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"/>
          <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
          <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/>
          <img src="https://img.shields.io/badge/figma-669DF6?style=for-the-badge&logo=figma&logoColor=white"/>
          <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
        </ul>
        <ul className='mb-10'>
          <div className='bg-slate-100 rounded-lg py-2 px-6 mb-4'>&quot;시도해 보았어요&quot;</div>

          <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"/>
          <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/> 
          <img src="https://img.shields.io/badge/dotnet-4053D6?style=for-the-badge&logo=dotnet&logoColor=white"/>
        </ul>
      </div>

      {/* Licence */}
      <div className='text-xl font-bold text-gray-800 mb-8'>
        🪪 License 자격증
        <div className='mt-3 mr-1'>• 
          <Link href="#stack" onClick={openBizCommPop} className='text-base font-medium rounded-md px-2 py-1 hover:bg-slate-100 w-fit'>AWS Certified Cloud Practitioner</Link>
        </div>
      </div>
    </div>
  )
}

export default Stack
