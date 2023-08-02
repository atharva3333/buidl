import React from 'react'
import CarouselAngels from './CarouselAngels'
const Angels = () => {

  const slides = [
    {
        id:1,
      name:'Surojit Chatterjee',  
      title: 'EIR, a16z, ex CPO Coinbase',
      image: 'surojit.jpg',
      
      
    },
    {
        id:2,
        name:'Sandeep Nailwal',  
        title: 'Co-Founder, Polygon',
        image: 'sandeep.jpg',
        
        
      },

      {
        id:3,
        name:'Yudai Suzuki',  
        title: 'Co-Founder, Fracton Ventures',
        image: 'yudai.jpg',
        
      },
      {
        id:4,
        name:'Alex Shin',  
        title: ' Founder, shinlabs.xyz',
        image: 'alex.jpg',
        
        
      }, 

      {
        id:5,
        name:'Vishal Kankani',  
        title: 'Principal, Multicoin Capital',
        image: 'vishal.jpg',
        
        
      }, 

      {
        id:6,
        name:'Arjun Kalsy',  
        title: 'Head of Ecosystem, Mantle Network',
        image: 'arjun.jpg',
        
     
      }, 
      {
        id:7,
        name:'Nischal Shetty',  
        title: ' Committer, Shardeum',
        image: 'nischal.jpg',
        
     
      }, 
      {
        id:8,
        name:'Jaynti Kanani',  
        title: 'Co-Founder, Polygon',
        image: 'jayanti.jpg',
        
     
      }, 
      {
        id:9,
        name:'Ganesh Swami',  
        title: '  CEO, Covalent',
        image: 'ganesh.jpg',
        
     
      }, 
      {
        id:10,
        name:'Aniket Jindal',  
        title: 'Co-Founder, Biconomy',
        image: 'aniket.jpg',
        
     
      }, 
      {
        id:11,
        name:'Joel John',  
        title: ' Principal, Ledger Prime',
        image: 'joel.jpg',
        
     
      }, 
      {
        id:12,
        name:'Tamar Menteshashvili',  
        title: 'Solana Foundation',
        image: 'tamar.jpg',
        
     
      }, 
      {
        id:13,
        name:'Siddharth Menon',  
        title: '  Co-Founder, Tegro, WazirX',
        image: 'sid.jpg',
        
     
      }, 
  ];
  return (
    <div className='container'>
        <h1 className=' my-16 text-3xl md:text-5xl lg-text-7xl font-semibold'>Angels</h1>
        <CarouselAngels slides={slides} />
    </div>
  )
}

export default Angels