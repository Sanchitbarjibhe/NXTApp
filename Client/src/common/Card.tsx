import React from 'react'
import 'src/custom/output.css';
import { customers } from 'src/constant';


export default function Card() {
    return (
        <>

            <div className=" flex justify-center p-8">
                <div className="grid grid-cols-1 w-3/5 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:gap-3">
                    <div className='leading-10 h-36 flex-col flex justify-center item-center rounded-lg bg-primaryTwo' >
                        <div className='w-20 h-20 bg-slate-950 rounded-full'>
                        </div>
                        <p className='font-header text-sm text-white'>Add Customer</p>
                    </div>
                    {customers.map((item: any, idx: number) =>
                        <div key={idx} className='leading-10 pl-8 h-36 py-3 flex-col rounded-lg bg-primaryTwo' >
                            <p className='font-header text-sm text-white'>{item.id}</p>
                            <p className='font-header text-sm text-white'>{item.name}</p>
                            <p className='font-header text-sm text-white'>{item.address} </p>
                            <p className='font-header text-sm text-white'>{item.stbno}</p>
                            <div className='w-6 h-6 bg-red-900'></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
