import React from 'react';
import PyramidSvg from '../assets/pyramid.svg';
import Unlock from '../assets/unlock.svg';
import Content from '../assets/content.svg';
import Mentoring from '../assets/mentoring-icon.svg';
import Influencers from '../assets/influencer-icon.svg';
import Grants from '../assets/grants-icon.svg';

const Features = () => {
  return (
    <div className='container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
       
        <div>
          <p className='sm:mt-7 mt-20 text-xl font-light'>Create Profile &</p>
          <h1 className='mt-5 text-4xl md:text-5xl lg:text-7xl  font-semibold'>Unlock <span className="bg-gradient-to-r from-emerald-500 to-emerald-900 text-transparent bg-clip-text">Benefits</span></h1>
          <h1 className='my-5 text-4xl md:text-5xl lg:text-7xl  font-semibold'>every month</h1>
          <div class="mt-10 flex flex-row flex-wrap gap-5 items-center">
            <div class="bg-blue-50 rounded-full py-2 px-5 flex text-xs md:text-sm lg:text-base items-center gap-1"><img src={Unlock} alt='unlock' className='w-[20px] md:w-[20px] lg:w-[30px]'/>
              <h2>Access to angels/VCs</h2>
            </div>

            <div class="bg-orange-50 rounded-full py-2 px-5 flex text-xs md:text-sm lg:text-base items-center gap-1"><img src={Content} alt='Content' className='w-[20px] md:w-[20px] lg:w-[30px]'/>
              <h2>Content</h2>
            </div>

            <div class="bg-green-50 rounded-full py-2 px-5 flex text-xs md:text-sm lg:text-base items-center gap-1"><img src={Grants} alt='Grants' className='w-[20px] md:w-[20px] lg:w-[30px]'/>
              <h2>Grants</h2>
            </div>

            <div class="bg-purple-50 rounded-full py-2 px-5 flex text-xs md:text-sm lg:text-base items-center gap-1"><img src={Mentoring} alt='Mentoring' className='w-[20px] md:w-[20px] lg:w-[30px]'/>
              <h2>1-1 Mentoring</h2>
            </div>

            <div class="bg-red-50 rounded-full py-2 px-5 flex text-xs md:text-sm lg:text-base items-center gap-1"><img src={Influencers} alt='Influencers' className='w-[20px] md:w-[20px] lg:w-[30px]'/>
              <h2>Influencers</h2>
            </div>
          </div>

        </div>
        <div>
          <img src={PyramidSvg} alt="Pyramid" />
        </div>
      
    </div>
  );
}

export default Features;
