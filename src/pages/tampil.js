import React from 'react'
import { Content } from '../component/content'
import { Header } from '../component/header/header'
import '../style/style.css'

export const Tampil = () => {
    return (
        <section className='view'>
            <Header />
            <Content />
        </section>
    )
}
