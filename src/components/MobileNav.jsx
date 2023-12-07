import React from 'react'
import { links } from '../data';

const MobileNav = ({setMenu}) => {
    return (
        <div id='drop' className='absolute rounded-md top-16 right-5 flex flex-col gap-2 w-[180px] sm:w-auto bg-emerald-200 py-2 items-center sm:flex sm:flex-row sm:bg-transparent sm:top-auto sm:justify-evenly gap-x-3'>
            {links.map((link) => {
                const { id, href, text } = link;
                return (
                    <a  onClick={()=>setMenu(false)}
                        key={id}
                        href={href}
                        className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
                    >
                        {text}
                    </a>
                );
            })}
        </div>
    )
}

export default MobileNav
