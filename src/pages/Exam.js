import React, { useContext, useEffect } from 'react'
import { Main } from '../components/exam/Main';
import { Navbar } from '../components/exam/Navbar';

import { UserContext } from './userContext'

export function Exam(){

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("myTryouts");
    }, [])

    return (
        <div className="page exam">
            <Navbar />
            <Main />
        </div>
    )
} 