import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/loginredux'
import { useDispatch, useSelector } from 'react-redux'

export const Logout = () => {
    const dispach = useDispatch()
    const { userLogin } = useSelector((state) => state.data)
    const navi = useNavigate()
    const log = () => {
        dispach(logout())
        localStorage.removeItem('token')
        navi('/')

    }
    return (
        <section className='bungkus'>
            <div onClick={log}>Logout</div>
            <div className='ingfo'>
                <div className='bulat'></div>
                <div className='email' onClick={log}>
                    {JSON.stringify(userLogin)}
                </div>
                <div className='nama'></div>
            </div>
        </section>
    )
}
