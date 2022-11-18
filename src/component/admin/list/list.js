import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { minJumlah, addJumlah } from '../../../redux/ecom'

export const List = ({ data }) => {
    const dispach = useDispatch()
    const [kamu, setKamu] = useState(data.jumlah)
    return (
        <div className='content-admin'>
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
                <div class="rate">
                    <img alt='kamu'
                        src="https://img.icons8.com/ios-filled/50/FAB005/christmas-star.png"
                    />
                    <p>{data.val.rating.rate} | sold {data.val.rating.count}</p>
                </div>
                <h4>$ {data.val.price}</h4>
                <div class="isi">
                    <div class="left">Category</div>
                    <div class="righ">
                        <p>{data.val.category}</p>
                    </div>
                </div>
                <div class="isi">
                    <div class="left">Stok</div>
                    <div class="righ">
                        <div class="btn" onClick={() => {
                            dispach(minJumlah(data.val.id))
                            setKamu(kamu - 1)
                        }}>-</div>
                        <p>{kamu}</p>
                        <div class="btn" onClick={() => {
                            dispach(addJumlah(data.val.id))
                            setKamu(kamu + 1)
                        }}>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
