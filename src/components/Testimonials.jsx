import React from 'react'
import Carousel from './Carousel'
const Testimonials = () => {
    const slides = [
        {
            id:1,
          name:'Sahil Bloom',  
          title: 'MP, SRB Ventures',
          image: '1t.png',
          
          description: 'Never bet against a person who just keeps showing up.'
        },
        {
            id:2,
            name:'Semil Shah',  
            title: 'Founder, Haystack',
            image: '2t.png',
            
            description: 'Updates are an opportunity for the founders to supply their most passionate early supporters with info and ammo to infuse into our conversations with downstream investors, potential angles.'
          },

          {
            id:3,
            name:'Jason Calacanis',  
            title: 'Angel Investor',
            image: '3t.png',
            
            description: 'If I stop getting investor updates from you, I’ll assume your startup is either dead or going to die.'
          },
          {
            id:4,
            name:'David Gardner',  
            title: 'Partner, Cofounders Capital',
            image: '4t.png',
            
            description: 'Demonstrate that you are learning things, fixing problems and always have a plan to move forward.'
          }, 

          {
            id:5,
            name:'Aaron Harris',  
            title: 'Partner at YCombinator',
            image: '5t.png',
            
            description: 'If your investors think about you frequently, they’ll not only help you with specific requests, but point serendipitous opportunities your way. That’s one way you can ‘manufacture’ luck.'
          }, 

          {
            id:6,
            name:'David Waxman',  
            title: 'MP, TenOneTen Ventures',
            image: '6t.png',
            
            description: 'An update can pop your company’s needs to the top of the stack and you might end up with that great engineer who just came onto the market.'
          }, 
      ];

  return (
    <div className='bg-gradient-to-r from-[#89f7fe] to-[#66a6ff] my-20 w-full container'>
    <h1 className='py-20  text-2xl md:text-4xl lg:text-5xl text-center font-medium'>Why track your progress?</h1>
        <Carousel slides={slides} />
    </div>
  )
}

export default Testimonials

