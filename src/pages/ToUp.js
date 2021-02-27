
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { Main } from '../components/topUp/Main'
import { UserContext } from './userContext'

export function TopUp() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("topUp");
        document.title = "Top Up - Camakara";
    }, [])

    return(
        <div className="page topup-page">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}
