
import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { Main } from '../components/testimonial/Main'
import { TestimonialSection } from '../components/testimonial/TestimonialSection'
import { UserContext } from './userContext'

export function Testimonial() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("testimonial");
        document.title = "Testimonial - Camakara";
    }, [])


    return(
        <div className="page testimonial-page nav-dark">
            <Navbar />
            <Main />
            <TestimonialSection />
            <Footer />
        </div>
    )
}
