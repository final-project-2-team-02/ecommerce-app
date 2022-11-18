import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { tambah } from '../../../redux/userredux'
import { addCart } from '../../../redux/ecom'

export const ProductCard = ({ data }) => {
    const { user } = useSelector((state) => state.persistedReducer.user)
    const dispach = useDispatch()
    // const pengguna = user.find((val) => val.val.address.geolocation.long === localStorage.getItem('token'))
    const navi = useNavigate()
    const check = () => {
        if (localStorage.getItem('token')) {
            navi(`/${data.val.title}`)
        }
        else {
            navi('/login')
        }
    }
    const cart = () => {
        if (localStorage.getItem('token')) {
            // navi('/cart')
            console.log(data.val.id);
            dispach(addCart(data.val.id))
        } else {
            navi('/login')
        }
        // dispach(tambah({ data, name: 'aku' }))
    }
    return (
        <div class="card">
            <img alt='kamu'
                class="pict"
                src={data.val.image}

            />
            <div class="title">
                <p>{data.val.title}</p>
            </div>
            <div class="rate">
                <img alt='kamu'
                    src="https://img.icons8.com/ios-filled/50/FAB005/christmas-star.png"
                />
                <p>{data.val.rating.rate} | {data.val.rating.count}</p>
            </div>
            <div class="button item">
                <Link to={`/${data.val.title}`} >

                    <div class="price">$ {data.val.price}</div>
                </Link>
                <div class="cart" onClick={cart}>
                    <img alt='kamu'
                        src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
                    />
                </div>
            </div>
        </div>
    )
}
