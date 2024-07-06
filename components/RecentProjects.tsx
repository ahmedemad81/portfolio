import { projects } from '@/data'
import React from 'react'
import { CardContainer , CardBody, CardItem } from './ui/3dCard'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-12' id ='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>
                recent projects
            </span>
        </h1>
        <div className=' flex flex-wrap items-center justify-center '>
            {projects.map((project, i) => (
                <div key = {i} className='lg:min-h-[32.5rem] lg:h-[32rem] flex items-center justify-center sm:w-96 w-[80vw] mx-28 '>
                    <a href={project.link}  target='_blank' rel='noreferrer'>
                        <CardContainer className=" inter-var">
                            <CardBody className=" w-auto sm:w-[30rem] sm:h-[25rem] h-auto rounded-xl gap-4">
                                <CardItem translateZ="100" className="w-full mb-1">
                                    <img
                                        src={project.img}
                                        className="lg:h-72 lg:w-full md:h-60 md:w-auto rounded-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>

                                <CardItem
                                translateZ="70"
                                className="text-xl font-bold text-neutral-600 dark:text-white py-3"
                                >
                                {project.title}
                                </CardItem>
                                <CardItem
                                translateZ="50"
                                className="text-lg text-neutral-500 dark:text-white"
                                >
                                {project.des}
                                </CardItem>
                                
                                <CardItem
                                translateZ="50"
                                className="flex mt-4 space-x-2 items-center w-[100]"
                                >
                                
                                    {project.iconLists.map((icon, index) => (
                                        <div
                                        key={index}
                                        className="rounded-full bg-black lg:w-10 lg:h-10 w-9 h-9 flex justify-center items-center"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                        >
                                        <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                    

                                    <div className="absolute right-0 justify-center md:flex items-center hidden">
                                    <p className="flex lg:text-base md:text-xs text-sm text-purple">
                                        Check Project
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                    </div>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </a>
                </div>

            ))}
        </div>
    </div>
  )
}

export default RecentProjects