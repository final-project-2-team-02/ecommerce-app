import React, { useEffect } from 'react'
// import { ProductCard } from './card/productCard'
// import { Catalog } from './catalog/catalog'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/userredux'
// import { fetchMarket } from '../../redux/ecom'
// import { fetchUser } from '../redux/userredux'
// import { Banner } from './banner/banner'

export const Content = () => {
    const dispach = useDispatch()
    // const product = useSelector((state) => state.ecom.product)
    const { user } = useSelector((state) => state.user)
    const url = 'https://fakestoreapi.com/users';
    useEffect(() => {
        const fetching = () => {
            dispach(fetchUser(url))
        }
        fetching()
        console.log(user);
    }, [url])
    return (
        <div className='content'>
            {/* <Banner /> */}
            {/* <Catalog /> */}
            {/* {user.map((val, ind) => (
                <ProductCard data={val} key={ind} />
                <div key={ind}>{JSON.stringify(val)}</div>
            ))} */}
            <div>{JSON.stringify(user)}</div>
        </div>
    )
}
