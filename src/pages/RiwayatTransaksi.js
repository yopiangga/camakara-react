
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { Main } from '../components/riwayatTransaksi/Main'
import { UserContext} from './userContext'

export function RiwayatTransaksi() {

    const [menuActive, setMenuActive] = useContext(UserContext);

    useEffect(() => {
        setMenuActive("riwayatTopUp");
        document.title = "Riwayat Top Up - Camakara";
    }, [])

    return(
        <div className="page riwayatPembelian-page">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}
