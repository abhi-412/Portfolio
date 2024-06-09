import {React,useState} from 'react'
import SkillCard from '../Components/SkillCard'
import { SlBadge } from "react-icons/sl";
import {FaHtml5,FaAws,FaReact,FaPython,FaGithub,FaNodeJs} from 'react-icons/fa'
import { DiCss3,DiMongodb } from "react-icons/di";
import { SiTailwindcss,SiMysql,SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { TbBrandRedux } from "react-icons/tb";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { GrDeploy } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
SwiperCore.use([Pagination]);


const  details=[
    {skill:"HTML5",value:80,icon:<FaHtml5 />},
    {skill:"CSS3",value:90,icon:<DiCss3 />},
    {skill:"Javascript",value:80,icon:<IoLogoJavascript />},
    {skill:"TailwindCss",value:60,icon:<SiTailwindcss />},
    {skill:"React JS",value:80,icon:<FaReact />},
    {skill:"Node JS",value:80,icon:<FaNodeJs />},
    {skill:"Express JS",value:80,icon:<SiExpress />},
    {skill:"MongoDB",value:60,icon:<DiMongodb />},
    {skill:"Redux",value:60,icon:<TbBrandRedux />},
    {skill:"MySql",value:90,icon:<SiMysql />},
    {skill:"C++",value:80,icon:<SiCplusplus />},
    {skill:"Python",value:50,icon:<FaPython />},
    {skill:"Github",value:50,icon:<FaGithub />},
    {skill:"AWS",value:50,icon:<FaAws />},
    {skill:"Vercel/Netlify",value:50,icon:<GrDeploy />}
];



const Skills = () => {
    const [swiper, setSwiper] = useState(null);

  return (
    <section id='skills' className='w-full py-10 flex items-center justify-center bg-gray-800'>
        <div className=" w-full flex  flex-col gap-10 justify-center">
            <div className='title flex items-center gap-10 justify-center'>
            <SlBadge  className='text-6xl text-cyan-500'/>
                <h1 className='text-4xl'>My <span className='text-cyan-500'>Skills</span></h1>
            </div>

            <div className="flex items-center gap-10 p-6 justify-center flex-wrap">
            <Swiper className='w-full lg:w-10/12'
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              500:{
                slidesPerView: 3,
              },
              775:{
                slidesPerView: 5,
              },
              1400:{
                slidesPerView: 6,
              }
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            modules={[Pagination]}
        >
                {details.map((item,i)=>{
                    return<SwiperSlide key={i}> <SkillCard value={item.value} skill={item.skill} icon={item.icon}/></SwiperSlide>
                })}

            </Swiper>

            </div>
            <div className="flex justify-center gap-10 mt-5 items-center  rounded-full">
            <button
              className="button text-4xl  rounded-full flex items-center justify-center hover:text-cyan-600"
              onClick={() => {
                swiper.slidePrev();
              }}
            >
              <GrLinkPrevious />
            </button>
            <button
              className="button text-4xl  rounded-full flex items-center justify-center hover:text-cyan-600"
              onClick={() => {
                swiper.slideNext();
              }}
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
    </section>
  )
}

export default Skills
