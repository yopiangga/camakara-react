

import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Footer } from '../components/all/Footer'
import { Navbar } from '../components/all/Navbar'
import { InfoDetail } from '../components/tryoutDetail/InfoDetail'
import { InfoMapel } from '../components/tryoutDetail/InfoMapel'
import { UserContext } from './userContext'


export function TryoutDetail(){

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);

    const history = useHistory();
    useEffect(() => {
        setMenuActive("myTryout");
        document.title = "Tryout Detail - Camakara";
    }, [])

    if(user == null){
        history.push('/');
        return(<div></div>)
    } else {
        return (
            <div className="page tryout-detail">
                <Navbar />
                <InfoDetail />
                <InfoMapel />
                <Footer />
            </div>
        )
    }
    
}