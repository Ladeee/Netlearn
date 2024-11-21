import SignupNavbar from './signupNavbar'
import Left from '../../../assets/left-img.png'
import Right from '../../../assets/right-img.png'
import { Card } from 'antd'
import Netlearn from './email/netlearn'
import './signup.scss'

export default function Signup() {
  return (
    <div className="container">
      <div className="background-img">
        <img src={Left} alt="left background img" className="left-img" />
        <img src={Right} alt="right background img" className="right-img" />
      </div>
      <SignupNavbar />

      <div className="signup-container">
        <Card className="individual-wrapper" id="card">
          <Netlearn />
        </Card>
      </div>
    </div>
  )
}
