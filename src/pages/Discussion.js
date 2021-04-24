import React, { useContext, useEffect } from 'react'
import { Main } from '../components/discussion/Main';
import { Navbar } from '../components/discussion/Navbar';

import { UserContext } from './userContext';

export function Discussion(){

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("myTryouts");
        document.title = "Pembahasan - Camakara";
    }, [])

    return (
        <div className="page exam">
            <Navbar />
            <Main />
        </div>
    )
} 