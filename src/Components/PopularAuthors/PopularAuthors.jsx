import React from 'react';
import man1 from '../../assets/man-1.png'
const PopularAuthors = () => {
    return (
        <div className='md:container  mx-auto my-15'>
            <h1 className='text-[36px]  font-bold text-center'>Popular Authors</h1>
            <div className="bg-white py-4 mt-5 px-7 rounded-md ">
             <div className="grid md:grid-cols-6 gap-5">
                <div className='flex flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man1} alt="" />
                    </div>
                    <h2 className='text-[25px] text-gray-500 font-semibold'>jhankar mahbub</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man1} alt="" />
                    </div>
                    <h2 className='text-[25px] text-gray-500 font-semibold'>jhankar mahbub</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man1} alt="" />
                    </div>
                    <h2 className='text-[25px] text-gray-500 font-semibold'>jhankar mahbub</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man1} alt="" />
                    </div>
                    <h2 className='text-[25px] text-gray-500 font-semibold'>jhankar mahbub</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man1} alt="" />
                    </div>
                    <h2 className='text-[25px] text-gray-500 font-semibold'>jhankar mahbub</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man1} alt="" />
                    </div>
                    <h2 className='text-[25px] text-gray-500 font-semibold'>jhankar mahbub</h2>
                </div>
                
                
             </div>
            </div>
        </div>
    );
};

export default PopularAuthors;