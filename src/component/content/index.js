import React, { useEffect } from 'react'
import { ProductCard } from './card/productCard'
import { Catalog } from './catalog/catalog'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarket } from '../../redux/ecom'
import { Banner } from './banner/banner'

export const Content = () => {
    const dispach = useDispatch()
    // const product = useSelector((state) => state.ecom.product)
    const { product } = useSelector((state) => state.ecom)
    const url = 'https://fakestoreapi.com/products';
    useEffect(() => {
        const fetching = () => {
            dispach(fetchMarket(url))
        }
        fetching()
        console.log(product);
    }, [url])
    return (
        <div className='content'>
            <Banner />
            <Catalog />
            {product.map((val, ind) => (
                <ProductCard data={val} key={ind} />
                // <div key={ind}>{JSON.stringify(val)}</div>
            ))}
        </div>
    )
}
