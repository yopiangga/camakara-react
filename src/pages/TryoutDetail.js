

import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { InfoDetail } from '../components/tryoutDetail/InfoDetail'
import { InfoMapel } from '../components/tryoutDetail/InfoMapel'
import { UserContext } from './userContext'


export function TryoutDetail(){

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("myTryout");
    }, [])

    return (
        <div className="page tryout-detail">
            <Navbar />
            <InfoDetail />
            <InfoMapel />
            <Footer />
        </div>
    )
}