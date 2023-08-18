import { MdWork } from 'react-icons/md'
import Title from './Title'
import ExperiencesCards from './ExperiencesCards'
import { SiReactivex } from 'react-icons/si'

const Experience = () => {
  return (
    <div className='wrapper'>
        <Title text='Experience' icon={<MdWork></MdWork>}></Title>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <ExperiencesCards text='React' subTitle='Web Developer 2022 - Present' icon={<SiReactivex></SiReactivex>}></ExperiencesCards>
            <ExperiencesCards text='Toptal' subTitle='Web Developer 2022 - Present' icon={<SiReactivex></SiReactivex>}></ExperiencesCards>
            <ExperiencesCards text='Freelancer' subTitle='Web Developer 2022 - Present' icon={<SiReactivex></SiReactivex>}></ExperiencesCards>
            <ExperiencesCards text='Fiverr' subTitle='Web Developer 2022 - Present' icon={<SiReactivex></SiReactivex>}></ExperiencesCards>
        </div>
    </div>
  )
}

export default Experience

