import React from 'react'
import Indicators from 'src/common/Indicators'
import SrtButton from 'src/common/SrtButton'

export default function Subheader() {
    return (
        <div className='flex w-full'>
            <Indicators />
            <SrtButton />
        </div>
    )
}
