import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart, minCart } from '../../../redux/ecom'

export const Listnya = ({ data }) => {
    const dispach = useDispatch()
    const [cart, setCart] = useState(data.cart)
    // const [price, setPrice] = useState(data.val.price)
    return (
        <div className='content-cart'>
            <div class="kiri">
                <img
                    class="pict"
                    src={data.val.image}
                    alt=""
                />
            </div>
            <div className='kanan'>
                <h3>
                    {data.val.title}
                </h3>

                <div class="isi">
                    <div class="left">Stok</div>
                    <div class="righ">
                        <p>{data.jumlah}</p>
                    </div>
                </div>
                <div class="isi">
                    <h4>$ {data.val.price * cart}</h4>
                    {/* <div class="left">Cart</div> */}
                    <div class="righ">
                        <div class="btn" onClick={() => {
                            if (cart > 0) {

                                dispach(minCart(data.val.id))
                                setCart(cart - 1)
                            }
                        }}>-</div>
                        <p>{cart}</p>
                        <div class="btn" onClick={() => {
                            dispach(addCart(data.val.id))
                            setCart(cart + 1)
                        }}>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
