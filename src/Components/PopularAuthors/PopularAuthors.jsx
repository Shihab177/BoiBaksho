import React from 'react';
import man1 from '../../assets/man-1.png'
import man2 from '../../assets/ahmudulla.jpeg'
import man3 from '../../assets/humaun.jpg'
import man4 from '../../assets/munjarin (1).jpg'
import man5 from '../../assets/kh.jpg'
import man6 from '../../assets/eleas.jpg'

const PopularAuthors = () => {
    return (
        <div className='md:container  mx-auto my-15'>
            <h1 className='text-[36px]  font-bold text-gray-700 text-center'>Popular Authors</h1>
            <div className="bg-white py-4 mt-5 px-7 rounded-md ">
             <div className="grid md:grid-cols-6 gap-5">
                <div className='flex hover:shadow-2xl bg-gray-100 rounded-md p-1 flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man1} alt="" />
                    </div>
                    <h2 className='text-[20px] text-gray-900 font-semibold'>jhankar mahbub</h2>
                </div>
                <div className='flex bg-gray-100 hover:shadow-2xl rounded-md p-1 flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man3} alt="" />
                    </div>
                    <h2 className='text-[20px] text-gray-900 font-semibold'>Humayun Ahmed</h2>
                </div>
                <div className='flex bg-gray-100 hover:shadow-2xl rounded-md p-1 flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man2} alt="" />
                    </div>
                    <h2 className='text-[20px] text-gray-900 font-semibold'>Sheikh Ahmadullah</h2>
                </div>
                <div className='flex bg-gray-100 hover:shadow-2xl rounded-md p-1 flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man4} alt="" />
                    </div>
                    <h2 className='text-[20px] text-gray-900 font-semibold'>Munzereen Shahid</h2>
                </div>
                <div className='flex bg-gray-100 hover:shadow-2xl rounded-md p-1 flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man5} alt="" />
                    </div>
                    <h2 className='text-[20px] text-gray-900 font-semibold'>Zonayed Ahmed</h2>
                </div>
                <div className='flex bg-gray-100 hover:shadow-2xl rounded-md p-1 flex-col items-center'>
                    <div className="border-5 border-gray-300 rounded-full h-32 w-32">
                       <img className='w-full h-full rounded-full' src={man6} alt="" />
                    </div>
                    <h2 className='text-[20px] text-gray-900 font-semibold'>Muhammad Elias</h2>
                </div>
                
                
             </div>
            </div>
        </div>
    );
};

export default PopularAuthors;