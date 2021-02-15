
import React from 'react'
import { Main } from '../components/about/Main'
import { Story } from '../components/about/Story'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'

export function About() {

    return(
        <div className="page about-page nav-dark">
            <Navbar />
            <Main />
            <Story />
            <Footer />
        </div>
    )
}
