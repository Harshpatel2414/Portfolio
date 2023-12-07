import { useState } from 'react';
import { links } from '../data';
import { FaBars } from 'react-icons/fa';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className='bg-emerald-100 px-5 sticky top-0 z-10 border-b-2 border-emerald-300'>
      <div className='align-element py-4 flex items-center sm:py-7 justify-between'>
        <h2 className='text-3xl font-bold'>
          Harshal<span className='text-emerald-600'>Patel</span>
        </h2>
        <FaBars onClick={() => setMenu((prev) => !prev)} className='w-8 h-6 sm:hidden hover:text-green-500' />
        {menu && <MobileNav setMenu={setMenu} />}
        <div id='drop' className='hidden sm:w-auto bg-emerald-200 py-2 items-center sm:flex sm:flex-row sm:bg-transparent sm:top-auto sm:justify-evenly gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
