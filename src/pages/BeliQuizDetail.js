

import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { InfoDetail } from '../components/beliQuizDetail/InfoDetail'
import { InfoMapel } from '../components/beliQuizDetail/InfoMapel'

import { UserContext } from './userContext'


export function BeliQuizDetail(){

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("products");
        document.title = "Ikuti Quiz - Camakara";
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