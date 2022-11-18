import React from 'react'
import { useSelector } from 'react-redux'
import { List } from '../component/admin/list/list'
import { useDispatch } from 'react-redux'
import { Listnya } from '../component/content/list/list'
import { addRecap } from '../redux/ecom'

export const Cart = () => {
    const dispach = useDispatch()
    const { product } = useSelector((state) => state.persistedReducer.ecom)

    const kamu = product.filter((nilai) => {
        return nilai.cart > 0
    })
    const chek = () => {
        dispach(addRecap())
    }
    return (
        <div>
            {kamu.length === 0
                ?
                <p>Kosong</p>
                :
                <>
                    {product.map((data, ind) => {
                        if (data.cart > 0) {
                            return <Listnya key={ind} data={data} />
                        }
                    })}
                    <div onClick={chek}>Checkout</div>
                </>}

        </div>
    )
}
