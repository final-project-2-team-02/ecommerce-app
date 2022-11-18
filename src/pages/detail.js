import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { inputCart } from '../redux/ecom'

export const Detail = () => {
    const navi = useNavigate()
    const { product } = useSelector((state) => state.persistedReducer.ecom)
    const dispach = useDispatch()
    const { id } = useParams()
    const barang = product.find((pro) => {
        return pro.val.title === id
    })
    const [value, setValue] = useState(barang.cart)
    console.log(barang);
    const min = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }
    const add = () => {
        setValue(value + 1)
    }
    const cartval = () => {
        dispach(inputCart({ value, id: barang.val.id }))
        navi('/')

    }
    const cart = () => {
        if (localStorage.getItem('token')) {
            // navi('/cart')
            dispach(inputCart({ value, id: barang.val.id }))
            navi('/')
        } else {
            navi('/login')
        }
        // dispach(tambah({ data, name: 'aku' }))
    }
    return (

        <>
            <div class="content2">
                <div class="kiri">
                    <img
                        class="pict"
                        src={barang.val.image}
                        alt=""
                    />
                </div>
                <div class="kanan">
                    <h3>
                        {id}
                    </h3>
                    <div class="rate">
                        <img alt='kamu'
                            src="https://img.icons8.com/ios-filled/50/FAB005/christmas-star.png"
                        />
                        <p>{barang.val.rating.rate} | sold {barang.val.rating.count}</p>
                    </div>
                    <h4>$ {barang.val.price}</h4>
                    <div class="isi">
                        <div class="left">category</div>
                        <div class="righ">
                            <p>{barang.val.category}</p>
                        </div>
                    </div>
                    <div class="isi">
                        <div class="left">Stok</div>
                        <div class="righ">
                            <p>{barang.jumlah}</p>
                        </div>
                    </div>
                    <div class="isi">
                        <div class="left">quantity</div>
                        <div class="righ">
                            <div class="btn" onClick={min}>-</div>
                            <p>{value}</p>
                            <div class="btn" onClick={add}>+</div>
                        </div>
                    </div>

                    <div class="fungsi">
                        <div class="keranjang" onClick={cart}>Masukkan Keranjang</div>
                        <div class="belanja">Belanja Sekarang</div>
                    </div>
                </div>
            </div>
            <div class="content3">
                <div class="des">
                    <h1>Description</h1>
                </div>
                <div class="detail">
                    <p>
                        {barang.val.description}
                    </p>
                </div>
            </div>
        </>

    )
}
