
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { Main } from '../components/scoreBoard/Main'
import { TableSection } from '../components/scoreBoard/TableSection'
import { UserContext } from './userContext'

export function ScoreBoard() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("tryout");
        document.title = "Skor Tryout - Camakara";
    }, [])


    return(
        <div className="page score-page nav-dark">
            <Navbar />
            <Main />
            <TableSection />
            <Footer />
        </div>
    )
}
