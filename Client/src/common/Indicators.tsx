import React from 'react'

export default function Indicators() {
    return (
        <>
            <div className='flex'>
                <div className='flex justify-center items-center text-center rounded-full bg-green-700 w-1/12 h-8'>500 Active</div>
                <div className='flex justify-center items-center text-center rounded-full bg-yellow-500 w-1/12 h-8'>150 Issues</div>
                <div className='flex justify-center items-center text-center rounded-full bg-red-700 w-1/12 h-8'>200 InActive</div>
            </div>
        </>
    )
}