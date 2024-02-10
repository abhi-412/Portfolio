import React from 'react'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const SkillCard = (props) => {
    const {value,skill,icon} =props;
  return (
   <div className='flex flex-col border-2 bg-gray-900 shadow-cyan-800 shadow-2xl cursor-pointer p-5 border-cyan-600 rounded gap-10'>
        
            <CircularProgressbarWithChildren value={value} strokeWidth={4} styles={buildStyles({ pathColor: '#00838f'})}>
                {<div className='flex flex-col justify-center items-center gap-2 md:gap-3'>
                    <p className='text-5xl md:text-3xl hover:text-cyan-600 lg:text-6xl'>{icon}</p>
                    
                </div>
                }

            </CircularProgressbarWithChildren>
            <div className='flex justify-center'>
                <p className='text-xl'>{skill}</p>
            </div>
        
        
   </div>
  )
}

export default SkillCard
