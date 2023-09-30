import React from 'react'
import Image from 'next/image';
import HomeIcon from 'src/assets/icons/home-filled.svg'
import ListIcon from 'src/assets/icons/round-list.svg'
import AddFilled from 'src/assets/icons/add-filled.svg'
import Avatar from 'src/assets/icons/avatar-solid.svg'
import Bell from 'src/assets/icons/notice.svg'

export default function menubar() {
    return (
        <>
            <div className='flex py-3 px-9 w-5/12 rounded-full drop-shadow-2xl items-center justify-between fixed bottom-8 text-white bg-black'>
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
                    <Image src={Bell} alt='' width={22} height={22} />
                </a>

                <a href="#" className='cursor-pointer'>
                    <Image src={Avatar} alt='' width={28} height={28} />
                </a>
            </div>
        </>
    )
}

