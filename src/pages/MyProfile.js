
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { Main } from '../components/myProfile/Main'
import { UserContext } from './userContext'

export function MyProfile() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("profile");
    }, [])

    return(
        <div className="page profile-page">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}
