import React from 'react'
import { useSelector } from 'react-redux'
import { List } from '../component/admin/list/list'

export const Admin = () => {
    const { product } = useSelector((state) => state.persistedReducer.ecom)
    return (
        <>
            {product.map((value, ind) => <List key={ind} data={value} />)}
        </>
    )
}
