import React from 'react'

export default function Indicators() {
    return (
        <>
            <div className='flex w-1/3'>
                <div className='flex justify-center mr-4 items-center w-full text-center rounded-full bg-green-700 h-8'>500 Active</div>
                <div className='flex justify-center mr-4 items-center w-full text-center rounded-full bg-yellow-500 h-8'>150 Issues</div>
                <div className='flex justify-center mr-4 items-center w-full text-center rounded-full bg-red-700 h-8'>200 InActive</div>
            </div>
        </>
    )
}