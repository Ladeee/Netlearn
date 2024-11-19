import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './components/onboarding/login/welcome'
import Forgot from './components/onboarding/signup/password/forgot'
import Trial from './components/onboarding/signup/organization/trial'
import Demo from './components/onboarding/signup/organization/demo'
import Reset from './components/onboarding/signup/password/reset'
import Payment from './components/onboarding/signup/organization/payment'
import Netlearn from './components/onboarding/signup/email/netlearn'
import './app.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Netlearn />} />
          <Route path="/netlearn" element={<Netlearn />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
