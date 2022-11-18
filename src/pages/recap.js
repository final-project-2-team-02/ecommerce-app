import React from 'react'
import { useSelector } from 'react-redux'

export const Recap = () => {
    const { product } = useSelector((state) => state.persistedReducer.ecom)
    return (
        // <div>{product.map((data) => {
        //     if (data.recap > 0) {
        //         <div>{JSON.stringify(data)}</div>
        //     }
        //     else {
        //         console.log('kosong');
        //     }
        // })}</div>
        <>
            {JSON.stringify(product)}
        </>
    )
}
