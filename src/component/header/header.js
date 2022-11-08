import React from 'react'
import { Link } from 'react-router-dom'
// import './header.css'

export const Header = () => {
    const isFill = localStorage.getItem('token')
    return (
        <div class="header">
            <h3>Tokopakedi</h3>
            <div class="searching">
                <input type="text" name="" id="" />
                <img alt='key'
                    src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
                />
            </div>
            {
                isFill ?
                    <div class="dia">
                        <img alt='kamu'
                            src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
                        />
                        <Link to='/login'>
                            <div className='avatar'></div>
                        </Link>
                    </div>
                    : <Link to='/login'>
                        <div class="fitur">masuk</div>
                    </Link>
            }
        </div>
    )
}
