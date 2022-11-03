import React from 'react'
import { Link } from 'react-router-dom'
// import './card.css'

export const ProductCard = ({ data }) => {
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
                <div class="cart">
                    <img alt='kamu'
                        src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
                    />
                </div>
            </div>
        </div>
    )
}
