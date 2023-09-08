import React from 'react'
import Image from 'next/image';
import HomeIcon from 'src/assets/icons/home-filled.svg'
import ListIcon from 'src/assets/icons/round-list.svg'
import AddFilled from 'src/assets/icons/add-filled.svg'
import Avatar from 'src/assets/icons/avatar-solid.svg'

export default function menubar() {
    return (
        <>
            <div className='flex p-6 w-1/2 rounded-full items-center justify-between fixed bottom-8 text-white bg-black'>
                <a href="#" className='cursor-pointer'>
                    <Image src={HomeIcon} alt='' width={28} height={28} />
                </a>

                <a href="#" className='cursor-pointer'>
                    <Image src={AddFilled} alt='' width={28} height={28} />
                </a>

                <a href="#" className='cursor-pointer'>
                    <Image src={ListIcon} alt='' width={35} height={35} />
                </a>

                <a href="#" className='cursor-pointer'>
                    <Image src={Avatar} alt='' width={32} height={32} />
                </a>

                <a href="#" className='cursor-pointer'>
                    <Image src={Avatar} alt='' width={28} height={28} />
                </a>
            </div>
        </>
    )
}

