
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { CardTryout } from '../components/products/CardTryout'
import { CariTryout } from '../components/products/CariTryout'
import { InformationCard } from '../components/products/InformationCard'
import { UserContext } from './userContext'

export function Products() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("products");
    }, [])

    return(
        <div className="page product-page">
            <Navbar />
            <InformationCard />
            <CariTryout />
            <CardTryout />
            <Footer />
        </div>
    )
}
