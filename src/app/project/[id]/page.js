import Link from "next/link";
import { projects } from "./projects";

export default function Project({ params }) {
    
    const paramsId = params.id
    
    // paramsId가 projects의 반복 중 project.params와 일치하는 
    const myProject = projects.find(project => paramsId === project.params)
    
    return (
        <div id='project_detail' className="container my-16">
            <div className="text-2xl font-bold mb-2 text-gray-800">
                {myProject.name} <span className='text-sm font-normal text-gray-400'>{myProject.created}</span>
            </div>

            <div className="w-full h-full overflow-hidden p-1">
                <img src={myProject.gifUrl} className="w-full h-full object-cover"/>
                {myProject.gifUrl2 && <img src={myProject.gifUrl2} className="w-full h-full object-cover"/>}
            </div>

            <div className="mt-6 mb-3">
                <div className="text-lg font-bold w-fit bg-slate-100 rounded-md py-1 px-3 mb-3">🔎 프로젝트 소개</div>
                <div className="text-left text-[17px]">{myProject.content}</div>    
            </div>

            <div className="mt-6 mb-3">
                <div className="text-lg font-bold w-fit bg-slate-100 rounded-md py-1 px-3 mb-3">🔎 사용 기술 및 라이브러리</div>
                <ul className="text-[17px]">
                    {myProject.stacks.map(stack => (
                        <li key={stack}>{stack}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 mb-3">
                <div className="text-lg font-bold w-fit bg-slate-100 rounded-md py-1 px-3 mb-3">🔎 주요 개발 내용</div>
                <ul className="text-[17px]">
                    {myProject.developments.map(development => (
                        <li key={development}>{development}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 mb-3">
                <div className="text-lg font-bold w-fit bg-slate-100 rounded-md py-1 px-3 mb-3">🔎 깨달은 점</div>
                <ul className="text-[17px]">
                    {myProject.reviews.map(review => (
                        <li key={review}>{review}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 mb-3">
                <div className="text-lg font-bold w-fit bg-slate-100 rounded-md py-1 px-3 mb-3">🔗 링크</div>
                <ul className="text-[17px]">
                    {Object.entries(myProject.link).map(([key, value])=> (
                            <li key={key} className="font-bold text-xl">
                                <span className="mr-2">{key}:</span>
                                <span className="hover:text-violet-500 text-blue-400"><Link href={value}>{value}</Link></span>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
  }
  
