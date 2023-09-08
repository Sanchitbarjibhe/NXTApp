import React from 'react'
import Design from 'src/assets/icons/design.png'
import Image from 'next/image';
import BellIcon from 'src/assets/icons/notifications_black_48dp.svg'
import SettingIcon from 'src/assets/icons/settings_black_24dp.svg'
import AvatarIcon from 'src/assets/icons/Avatar.svg'
// import 'src/custom/output.css';


export default function header() {
    return (
        <div className='flex w-full px-14 items-center justify-between'>
            <div className='text-red-700'>
                <Image src={Design} alt='' width={65} height={65} />
            </div>
            <div className='flex w-1/4 py-6 justify-end items-center'>
                <div className='px-4 text-yellow-100'>
                    <Image src={BellIcon} alt='' width={24} height={24} />
                </div>
                <div className='px-4 text-yellow-100'>
                    <Image src={SettingIcon} alt='' width={24} height={24} />
                </div>
                <div className='px-4 text-yellow-100'>
                    <Image src={AvatarIcon} alt='' width={36} height={36} />
                </div>
            </div>
        </div>
    )
}
