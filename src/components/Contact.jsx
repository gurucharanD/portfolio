import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/3aa8a384-0ffc-44ba-9f44-ff29e1376803' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name="name" placeholder='enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                    <input type='text' name="email" placeholder='enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                    <textarea name='message' rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='enter your message'></textarea>
                    <button className='text-white bg-gradient-to-b from cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>

                </form>
            </div>
        </div>
    )
}

export default Contact
