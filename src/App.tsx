import React from 'react';
import './app.scss';
import Signup from './components/onboarding/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Email from './components/onboarding/signup/email';
import Verify from './components/onboarding/signup/email/verify';
import Individual from './components/onboarding/signup/email/individual';
import Welcome from './components/onboarding/login/welcome';
import Forgot from './components/onboarding/signup/password/forgot';
import Trial from './components/onboarding/signup/organization/trial';
import Demo from './components/onboarding/signup/organization/demo';
import Reset from './components/onboarding/signup/password/reset';
import Payment from './components/onboarding/signup/organization/payment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/email' element={<Email />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/individual' element={<Individual />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/trial' element={<Trial />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
