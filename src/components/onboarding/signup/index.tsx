import { useEffect, useState } from 'react'
import SignupNavbar from './signupNavbar'
import Left from '../../../assets/left-img.png'
import Right from '../../../assets/right-img.png'
import { Card } from 'antd'
import Netlearn from './email/netlearn'
import './signup.scss'
import ProfileBar from '../../profile/profilebar'

export default function Signup() {
  const [popup, setPopup] = useState(false)

  const closePopup = () => setPopup(false)

  useEffect(() => {
    setPopup(true)
  }, [])

  return (
    <>
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

      {popup && (
        <div className="popup-display">
          <div className="show-popup">
            <ProfileBar close={closePopup} />
          </div>
        </div>
      )}
    </>
  )
}
