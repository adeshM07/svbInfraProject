import React from 'react'

const AboutSectionCard = ({ number, label }) => {

    return (
        <div className='text-foreground border-2 border-primary rounded-lg xl:w-[220px] 2xl:w-auto
        xl:px-4 xl:py-3 2xl:px-4 2xl:py-3 
        flex sm:gap-2 gap-1 items-center justify-center 
        lg:px-2 md:px-2
        px-1 py-2
    
        lg:w-max-none
        md:w-[220px]
        w-auto
        
        min-h-[50px] sm:min-h-[70px] xl:min-h-[80px]
        '>
            <h4 className='2xl:text-[28px] xl:text-[28px]
            xl:font-semibold 
            leading-none
            sm:text-[28px]
            text-[18px]
           font-semibold
            '>{number}</h4>
            <p className='xl:font-semibold 2xl:text-[16px] xl:text-[16px] sm:text-[16px] text-[9px] text-center font-semibold'>{label}</p>
        </div>
    )
}

export default AboutSectionCard
