import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {

    return (
        <div id='home' className='bg-emerald-100 py-24 px-5'>
            <div className='align-element grid sm:grid-cols-2 items-center gap-8'>
                <article id='hero1'>
                    <h1 className='text-7xl font-bold tracking-wider'>I'm Harshal</h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                        Front-End Developer
                    </p>
                    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                        turning ideas into interactive reality
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        <a href='https://github.com/harshpatel2414' target='__blank'>
                            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href='https://www.linkedin.com/in/harshpatil2414' target='__blank'>
                            <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href='https://twitter.com/Harshal2414' target='__blank'>
                            <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                    </div>
                </article>
                <article className='block mx-auto' id='hero2'>
                    <img src='./images/hero.svg' alt='harshal' className='h-80 lg:h-96' />
                </article>
            </div>
        </div>

    )
}

export default Hero;
