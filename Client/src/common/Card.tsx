import React from 'react'
import 'src/custom/output.css';
import { customers } from 'src/constant';


export default function Card() {
    return (
        <>
            <div className='grid'>
                {customers.map((item: any, idx: number) =>
                    < div className='flex justify-evenly mb-3'>
                        <div key={idx} className='flex content-center leading-8 pl-8 py-3 flex-col rounded-lg  h-40 w-72 bg-primaryTwo' >
                            <p className='font-header text-white'>{item.id}</p>
                            <p className='font-header text-white'>{item.name}</p>
                            <p className='font-header text-white'>{item.address} </p>
                            <p className='font-header text-white'>{item.stbno}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
