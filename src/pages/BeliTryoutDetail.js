

import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { InfoDetail } from '../components/beliTryoutDetail/InfoDetail'
import { InfoMapel } from '../components/beliTryoutDetail/InfoMapel'

import { UserContext } from './userContext'


export function BeliTryoutDetail(){

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("tryout");
    }, [])

    return (
        <div className="page beli-tryout-detail">
            <Navbar />
            <InfoDetail />
            <InfoMapel />
            <Footer />
        </div>
    )
}