
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { Main } from '../components/riwayatTopUp/Main'
import { UserContext } from './userContext'

export function RiwayatTopUp() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("riwayatTopUp");
    }, [])

    return(
        <div className="page riwayatPembelian-page">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}
