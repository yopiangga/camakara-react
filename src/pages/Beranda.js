
import React from 'react'

import {Navbar} from '../components/all/Navbar'
import {Main} from '../components/beranda/Main'
import {WhyUs} from '../components/beranda/WhyUs'
import { YouGet } from '../components/beranda/YouGet'
import { Testimonial } from '../components/beranda/Testimonial'
import { Contact } from '../components/beranda/Contact'
import {Footer} from '../components/all/Footer'

export function Beranda() {
    return (
        <div className="page home-page nav-dark">

            <Navbar />
            <Main />
            <WhyUs />
            <YouGet />
            <Testimonial />
            <Contact />        
            <Footer />
        </div>
    )
}
