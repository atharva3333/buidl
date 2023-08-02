import React from 'react'
import Biconomy from '../assets/Partners/biconomy-logo.png'
import Epns from '../assets/Partners/epns-logo.png'
import Polygon from '../assets/Partners/polygon-logo.png'
import Cosmos from '../assets/Partners/cosmos-logo.png'
import Mantle from '../assets/Partners/mantle-logo.png'
import Arbitium from '../assets/Partners/arbitrum-logo.png'
import Aws from '../assets/Partners/aws-logo.png'
import Ethereum from '../assets/Partners/ethereum-logo.png'
import Optimism from '../assets/Partners/optimism-logo.png'
import Solana from '../assets/Partners/solana-logo.png'
import Spheron from '../assets/Partners/spheron-logo.png'
import Starknet from '../assets/Partners/starknet-logo.png'
import Zksync from '../assets/Partners/zksync-logo.png'
const Partners = () => {
    return (
        <div className='container'>
            <h1 className='mb-10 text-3xl md:text-5xl lg-text-6xl font-semibold text-center'>Partners</h1>
            <div className='flex flex-wrap flex-row items-center justify-center'>
                <img src={Biconomy} alt='biconomy' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Epns} alt='epns' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Aws} alt='aws' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Spheron} alt='spheron' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Ethereum} alt='ethereum' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Polygon} alt='polygon' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Solana} alt='Solana' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Cosmos} alt='cosmos' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Arbitium} alt='arbitium' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Optimism} alt='optimism' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Starknet} alt='starknet' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Zksync} alt='zksync' className=' sm:max-w-[200px] max-w-[100px]' />
                <img src={Mantle} alt='mantle' className=' sm:max-w-[200px] max-w-[100px]' />
            </div>
            <p className='text-center text-blue-500 text-xl cursor-pointer font-light'>View All Partners</p>
            <p className='text-center text-lg mt-4 font-light max-w-[700px] mx-auto'>Are you a Chain devrel, infra provider, protocol, service provider, influencer &
                want to work with our startups?</p>
            <p className='text-center text-blue-500 text-xl cursor-pointer mt-4 font-light'>Partner with Us</p>
        </div>
    )
}

export default Partners