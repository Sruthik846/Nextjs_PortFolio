import { ReactNode } from "react";
interface Props{
    text:string;
    subTitle:string;
    icon:ReactNode
}

const ExperiencesCards = ({ text, subTitle,icon}: Props) => {
  return (
    <div className='flex items-center gap-6'>
            <span className='w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center'>
                <span className='text-2xl'>{icon}</span>
            </span>
            <div>
                <h3 className='text-2xl font-bold'>{text}</h3>
                <p className='text-base text-gray-400 tracking-wide'>{subTitle}</p>
            </div>
        </div>
  )
}

export default ExperiencesCards