import React from 'react'
import Form from './Form'

const Contact = () => {
    return (
        <section id='contact' className='flex flex-col align-middle justify-around gap-10 items-center px-5 md:flex-row py-5'>
            <div className='flex flex-col justify-center md:w-80 gap-2 '>
                <span className='text-emerald-500 text-7xl tracking-wider font-medium'>Let'me Hire</span>
                <p className='text-md text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. animi rerum totam harum magnam soluta.</p>
            </div>
            <Form/>
        </section>
    )
}

export default Contact
