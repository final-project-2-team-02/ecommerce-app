import React, { useEffect } from 'react'
// import { ProductCard } from './card/productCard'
// import { Catalog } from './catalog/catalog'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Header } from '../component/header/header'
import { fetchUser } from '../redux/userredux'
import '../style/style.css'
// import { fetchMarket } from '../../redux/ecom'
// import { fetchUser } from '../redux/userredux'
// import { Banner } from './banner/banner'

export const Tampil = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
