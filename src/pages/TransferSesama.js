
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { Main } from '../components/transferSesama/Main'
import { UserContext } from './userContext'

export function TransferSesama() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("transferSesama");
        document.title = "Transfer Sesama - Camakara";
    }, [])

    return(
        <div className="page transferSesama-page">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}
