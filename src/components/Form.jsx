import React from 'react'

const Form = () => {
    return (
        <form className='flex flex-col w-full md:w-1/3 justify-center gap-2 shadow-md p-5 rounded-xl bg-white'>
            <h3 className='text-xl font-bold text-center text-emerald-500'>Contact Me</h3>
            <label htmlFor="name">Name</label>
            <input className="p-1 outline-none bg-emerald-50 rounded-sm border-b-2 border-emerald-300" type="text" placeholder='enter name' />
            <label htmlFor="email" >Email</label>
            <input className="p-1 outline-none bg-emerald-50 rounded-sm border-b-2 border-emerald-300" type="email" placeholder='enter email' />
            <label htmlFor="msg">Message</label>
            <textarea name="msg" rows="4" className='bg-emerald-50 p-1 resize-none outline-none rounded-sm border-b-2 border-emerald-300' placeholder='write here ...' />
            <button className='border-b-2 border-emerald-300 w-20 mx-auto font-bold text-emerald-600 hover:border-green-400 hover:text-green-400'>Submit</button>
        </form>
    )
}

export default Form
