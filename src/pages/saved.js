import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../component/card'

export const Saved = () => {


    const { saved } = useSelector((state) => state.saved)
    console.log(saved);
    if (saved.length === 0) {
        return <div>KOsong</div>
    }
    return (
        <div className='content4 isi'>
            {saved.map((val, ind) => (
                <Card data={val} key={ind} />
                // <div key={ind}>{JSON.stringify(val)} </div>
            ))}
        </div>
    )
}
