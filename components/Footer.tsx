import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/Data'


const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>


    <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
            Ready to create <span className='text-purple'>
            immersive</span> Experiences?
        </h1>
        <p className='text-white-200 md:mt-10 my-5
        text-center'>Contact me today and let&apos;s 
            discuss how I can help create something 
            amazing.
        </p>
        <a href="mailto:bovanderhulst@gmail.com">
            <MagicButton 
                title='Lets get in touch'
                icon={<FaLocationArrow />}
                position='right'
            />
        </a>
    </div>

    <div className='flex mt-16 md:flex-row flex-col
    justify-between items-center'>
        <p className='md:text-base text-sm
        md:font-normal font-light'>Copyright © 2025 Bo</p>

        <div className='flex items-center md:gap-3
        gap-6 md:mt-0 mt-5'>
            {socialMedia.map((profile) => (
                <div key={profile.id} className='w-10 h-10
                cursor-pointer flex justify-center items-center
                backdrop-filter backdrop-blur-lg saturate-180
                bg-opacity-75 bg-black-200 rounded-lg
                border border-black-300'>
                    <a href={profile.link} target='_blank'>
                    <img src={profile.img} alt={profile.img}
                    width={20} height={20}/>
                    </a>
                </div>
            ))}
        </div>
    </div>
</footer>
  )
}

export default Footer