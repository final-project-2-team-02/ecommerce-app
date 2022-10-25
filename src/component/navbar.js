import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchUs } from '../redux/artredux'

export const Navbar = () => {
    const [input, setInput] = useState('')
    // const url = `https://newsapi.org/v2/everything?q=${input}&apiKey=8d195abe1f9748b19eefefd15d96c9c9`
    // const dispach = useDispatch()
    // const changing = (dat) => {
    //     setInput(dat)
    // }
    // const fetching = () => {
    //     dispach(fetchUs(url))
    // }
    return (
        <>
            <div className="header">
                <img alt='kamu'
                    src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png"
                />
                <Link to='/'>

                    <h1>Hacktiv News</h1>
                </Link>
                <div className='search'>
                    <input onChange={(e) => setInput('/search/' + e.target.value)} type="text" placeholder='search' on />

                    <Link to={input}>

                        <img alt='search' src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
                    </Link>

                </div>
            </div>
            <div className="header1">
                <Link to='/pro'>Programming</Link>
                <Link to='/covid'>Covid-19</Link>
                <Link to='/eco'>Economy</Link>
            </div>
            <div className="garis2"></div>
        </>
    )
}
