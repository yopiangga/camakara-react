
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
    <BrowserRouter>
      <Switch>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
