
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { Main } from '../components/scorePilihanDetail1/Main'
import { TableSection } from '../components/scorePilihanDetail1/TableSection'
import { UserContext } from './userContext'

export function ScorePilihanDetail1() {

    const [menuActive, setMenuActive] = useContext(UserContext);

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
