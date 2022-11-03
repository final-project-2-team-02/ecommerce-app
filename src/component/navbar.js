import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { fetchUs } from '../redux/artredux'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

export const Navbar = () => {
    const [input, setInput] = useState('')
    const [dis, setDis] = useState(true)
    const { collapseSidebar } = useProSidebar();
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
                <div className='drawer'>
                    <Sidebar collapsedWidth='0' backgroundColor='white' width='180px'>
                        <Menu closeOnClick={true} onClick={() => {
                            setDis(false)
                            collapseSidebar()
                        }}>
                            <MenuItem> <Link to='/'>Dashboard</Link></MenuItem>
                            <MenuItem> <Link to='/saved'>Saved</Link></MenuItem>
                            <MenuItem> E-commerce</MenuItem>
                        </Menu>
                    </Sidebar>
                    <img alt='kamu' onClick={() => {
                        setDis(false)
                        collapseSidebar()
                    }}
                        style={dis ? { display: 'block' } : { display: 'none' }}
                        src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
                    />
                </div>
                <img alt='kamu' onClick={() => {
                    setDis(true)
                    collapseSidebar()
                }}
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
