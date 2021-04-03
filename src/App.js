
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import './assets/css/css-reset.css';
import './assets/scss/desktop-style.css';
import './assets/scss/tablet-style.css';
import './assets/scss/mobileLandscape-style.css';
import './assets/scss/mobile-style.css';

import { Beranda } from './pages/Beranda';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Testimonial } from './pages/Testimonial';
import { MyProfile } from './pages/MyProfile';
import { TopUp } from './pages/ToUp';
import { MyTryout } from './pages/MyTryout';
import { RiwayatTopUp } from './pages/RiwayatTopUp';

import $ from 'jquery';
import { UserProvider } from "./pages/userContext";
import { TransferSesama } from "./pages/TransferSesama";
import { TryoutDetail } from "./pages/TryoutDetail";
import { BeliTryoutDetail } from "./pages/BeliTryoutDetail";
import { Login } from "./pages/Login";
import { Daftar } from "./pages/Daftar";
import { LupaPassword } from "./pages/LupaPassword";
import { Exam } from "./pages/Exam";
import { ScoreBoard } from "./pages/ScoreBoard";

function App() {

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
      $(".nav-desktop").addClass("active");
      $(".nav-mobile").addClass("active");
    } else {
      $(".nav-desktop").removeClass("active");
      $(".nav-mobile").removeClass("active");
    }

  })


  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/daftar" exact>
            <Daftar />
          </Route>
          <Route path="/lupa-password" exact>
            <LupaPassword />
          </Route>
          <Route path="/" exact>
            <Beranda />
          </Route>
          <Route path="/tentang-kami" exact>
            <About />
          </Route>
          <Route path="/produk" exact>
            <Products />
          </Route>
          <Route path="/testimoni" exact>
            <Testimonial />
          </Route>
          <Route path="/profile" exact>
            <MyProfile />
          </Route>
          <Route path="/top-up" exact>
            <TopUp />
          </Route>
          <Route path="/tryout-saya" exact>
            <MyTryout />
          </Route>
          <Route path="/riwayat-top-up" exact>
            <RiwayatTopUp />
          </Route>
          <Route path="/transfer-sesama" exact>
            <TransferSesama />
          </Route>
          <Route path="/tryout-detail" exact>
            <TryoutDetail />
          </Route>
          <Route path="/beli-tryout-detail" exact>
            <BeliTryoutDetail />
          </Route>
          <Route path="/exam" exact>
            <Exam />
          </Route>
          <Route path="/skor-Tryout" exact>
            <ScoreBoard />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
