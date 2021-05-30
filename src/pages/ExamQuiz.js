import React, { useContext, useEffect } from 'react'
import { Main } from '../components/exam-quiz/Main';
import { Navbar } from '../components/exam-quiz/Navbar';

import { UserContext } from './userContext'

export function ExamQuiz(){

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("myTryouts");
        document.title = "Tryout - Camakara";
    }, [])

    return (
        <div className="page exam">
            <Navbar />
            <Main />
        </div>
    )
} 