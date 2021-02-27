
import React, { useContext, useEffect } from 'react'
import { Main } from '../components/about/Main'
import { Story } from '../components/about/Story'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { UserContext } from './userContext'

export function About() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("about");
        document.title = "Tentang - Camakara";
    }, [])

    return(
        <div className="page about-page nav-dark">
            <Navbar />
            <Main />
            <Story />
            <Footer />
        </div>
    )
}
