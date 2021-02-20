
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { Main } from '../components/myTryout/Main'
import { UserContext } from './userContext'

export function MyTryout() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("myTryout");
    }, [])

    return(
        <div className="page myTryout-page">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}
