import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Detail = () => {
    const { product } = useSelector((state) => state.ecom)
    const { id } = useParams()
    const barang = product.find((pro) => {
        return pro.val.title === id
    })
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
                        <div class="left">quantity</div>
                        <div class="righ">
                            <div class="btn">-</div>
                            <p>13</p>
                            <div class="btn">+</div>
                        </div>
                    </div>

                    <div class="fungsi">
                        <div class="keranjang">Masukkan Keranjang</div>
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
