import React from 'react'

const Footer = () => {
  return (
    <div className='container mt-20'>
        <hr/>

        <div className='my-10 flex flex-row max-w-[1200px] items-start justify-between  sm:flex-wrap flex-nowrap'>
           <h1 className='text-xl md:text-3xl lg:text-4xl sm:text-left text-center font-medium tracking-tighter'>The home of <span className='text-blue-700'>web3</span>  <br></br>Startups</h1>
           <div className='flex gap-10'>
            <div>
                <h3 className='font-medium text-base'>Socials</h3>
                <ul className=' font-light my-2 text-gray-400 flex flex-col gap-4 text-sm' >
                    <li>Twitter</li>
                    <li>Discord</li>
                    <li>YouTube</li>
                </ul>
            </div>
            <div className='mb-10'>
            <h3 className='font-medium text-base'>Company</h3>
                <ul className='font-light my-2 text-gray-400 flex flex-col gap-4 text-sm'>
                    <li>BuidlersTribe</li>
                    <li>Partners</li>
                    <li>Reasearch</li>
                    <li>About Us</li>
                    <li>Brand Assets</li>
                    <li>Join Us</li>
                </ul>
            </div>
           </div>
        </div>
        <div className='my-20 text-center'>© BuidlersTribe 2023</div>
    </div>
  )
}

export default Footer