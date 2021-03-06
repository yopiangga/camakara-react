
import React from "react";
import {
  Router,
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
import { RiwayatTransaksi } from './pages/RiwayatTransaksi';

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
import { ScoreAll } from "./pages/ScoreAll";
import { ScorePilihanDetail1 } from "./pages/ScorePilihanDetail1";
import history from './history';
import { Discussion } from "./pages/Discussion";
import { CaraTopUp } from "./pages/CaraTopUp";
import { BeliQuizDetail } from "./pages/BeliQuizDetail";
import { ExamQuiz } from "./pages/ExamQuiz";

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
      <Router history={history}>
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
          <Route path="/cara-top-up" exact>
            <CaraTopUp />
          </Route>
          <Route path="/tryout-saya" exact>
            <MyTryout />
          </Route>
          <Route path="/riwayat-transaksi" exact>
            <RiwayatTransaksi />
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
          <Route path="/ikuti-quiz-detail" exact>
            <BeliQuizDetail />
          </Route>
          <Route path="/exam" exact>
            <Exam />
          </Route>
          <Route path="/exam-quiz" exact>
            <ExamQuiz />
          </Route>
          <Route path="/pembahasan" exact>
            <Discussion />
          </Route>
          <Route path="/skor-Tryout" exact>
            <ScoreBoard />
          </Route>
          <Route path="/skor-semua" exact>
            <ScoreAll />
          </Route>
          <Route path="/skor-pilihan-1" exact>
            <ScorePilihanDetail1/>
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
