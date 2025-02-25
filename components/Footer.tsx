import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
        <div className=' flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take the next step? 
                <p className='text-purple'>
                    Let&apos;s work together
                </p>
            </h1>

            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today and let&apos;s discuss how we can work together to bring your ideas to life.
            </p>

            <a href = "mailto:ahmedemad8@gmail.com">
                <MagicButton
                title='Get in touch'
                icon = {<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright &copy; 2024 Ahmed Emad. All rights reserved.
            </p>

            <div className='flex items-center md:gap-3 gap-6 justify-center mt-3'>
                {socialMedia.map((info) => (
                    <a key={info.id} href={info.url} target="_blank" rel="noreferrer">
                        <div
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer