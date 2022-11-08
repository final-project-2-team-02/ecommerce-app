import React, { useEffect, useState } from 'react'
import { ProductCard } from './card/productCard'
import { Catalog } from './catalog/catalog'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarket } from '../../redux/ecom'
import { Banner } from './banner/banner'
import { fetchUser } from '../../redux/userredux'
import { login } from '../../redux/loginredux'

export const Content = () => {
    const dispach = useDispatch()
    const { product } = useSelector((state) => state.ecom)
    const { user } = useSelector((state) => state.user)
    const { userLogin } = useSelector((state) => state.data)
    const urlProduct = 'https://fakestoreapi.com/products';
    const urlUser = 'https://fakestoreapi.com/users';
    const auth = () => {
        if (localStorage.getItem('token')) {
            dispach(login(localStorage.getItem('token')))
        }
    }
    const fetching = () => {
        dispach(fetchMarket(urlProduct))
        dispach(fetchUser(urlUser))
    }
    useEffect(() => {
        fetching()
        auth()
        console.log(userLogin);
    }, [])
    return (
        <div className='content'>
            <Banner />
            <Catalog />
            {product.map((val, ind) => (
                <ProductCard data={val} key={ind} />
            ))}
        </div>
    )
}
