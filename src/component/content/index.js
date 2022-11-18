import React, { useEffect, useState } from 'react'
import { ProductCard } from './card/productCard'
import { Catalog } from './catalog/catalog'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarket } from '../../redux/ecom'
import { Banner } from './banner/banner'
import { fetchUser } from '../../redux/userredux'
// import { login } from '../../redux/loginredux'

export const Content = () => {
    const dispach = useDispatch()
    const { product } = useSelector((state) => state.persistedReducer.ecom)
    const { loading } = useSelector((state) => state.persistedReducer.ecom)
    const { user } = useSelector((state) => state.persistedReducer.user)
    // const { userLogin } = useSelector((state) => state.persistedReducer.data)
    const urlProduct = 'https://fakestoreapi.com/products';
    const urlUser = 'https://fakestoreapi.com/users';
    const fetching = () => {
        dispach(fetchMarket(urlProduct))
        dispach(fetchUser(urlUser))
    }
    // const auth = () => {
    //     if (localStorage.getItem('token')) {
    //         dispach(loginredux(localStorage.getItem('token')))
    //         // dispach(login(JSON.parse(localStorage.getItem('token'))))
    //         // console.log(user.find((datanya) => datanya === localStorage.getItem('token')))
    //     }
    // }
    useEffect(() => {
        fetching()
        // auth()
        // console.log(userLogin);
    }, [urlProduct, urlUser])
    // useEffect(() => {
    //     const auth = () => {
    //         if (localStorage.getItem('token')) {
    //             // dispach(loginredux(JSON.parse(localStorage.getItem('token'))))
    //             dispach(login(JSON.parse(localStorage.getItem('token'))))
    //             // console.log(user.find((datanya) => datanya === localStorage.getItem('token')))
    //         }
    //     }
    //     auth()
    // }, [])
    return (
        <div className='content'>
            {loading === true
                ?
                <p>Loading</p>
                :
                <>
                    <Banner />
                    <Catalog />
                    {product.map((val, ind) => (
                        <ProductCard data={val} key={ind} />
                    ))}
                </>}

            {/* <div>{JSON.stringify(user)}</div> */}
        </div>
    )
}
