import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import gambar from '../data/undraw_login_re_4vu2.svg'
import { login } from '../redux/loginredux'
import { Logout } from './logout'

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const { user } = useSelector((state) => state.user)
    const { userLogin } = useSelector((state) => state.data)
    const dispach = useDispatch()
    const pindah = () => {
        user.find((ind) => {
            if (ind.val.email === email) {
                if (ind.val.password === pass) {
                    dispach(login(ind.val))
                    localStorage.setItem('token', ind.val)
                    navigate('/')
                } else {
                    console.log('password salah');
                }
            }
            else {
                console.log('email salah');
            }
        })
        // navigate('/')
    }

    if (localStorage.getItem('token')) {
        return <Logout />
    }
    return (
        <div class="wrapper">
            <img src={gambar} alt="" />
            <div class="login">
                <label for="email">Email</label>
                <input type="text" name="email" id="" placeholder="email" onChange={(val) => setEmail(val.target.value)} />
                <label for="password">Password</label>
                <input type="text" name="password" id="" placeholder="password" onChange={(val) => setPass(val.target.value)} />
                <div class="button" onClick={pindah}>Login</div>
                <p>
                    *Jika tidak bisa masuk, pastikan email dan password yang dimasukkan
                    sama pada <a href="https://fakestoreapi.com/users">daftar ini</a>
                </p>
                <p>{JSON.stringify(userLogin)}</p>
            </div>
        </div>
    )
}
