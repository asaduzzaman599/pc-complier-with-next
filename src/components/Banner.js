import React from 'react';
import bannerImage from '@/assets/images/banner.jpg'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='w-full grid lg:grid-cols-2 bg-slate-700'>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='text-center mt-8 lg:mt-0'>
                <h1 className='text-white text-lg lg:text-7xl'>PC Compilers</h1>
                <p className='text-gray-300 fount-light mt-4 text-sm lg:text-lg'>Where technology and dreams unite, welcome to our PC paradise</p>
                </div>
            </div>
            <div className='w-full p-8 rounded-2xl overflow-hidden mx-auto'>
                <Image src={bannerImage} alt='banner image' width={500} height={500} layout='responsive' className=' rounded-2xl ' />
            </div>
        </div>
    );
};

export default Banner;