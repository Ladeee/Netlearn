import { useState } from 'react'
import Teams from '../../../../assets/teams.png'
import Enterprise from '../../../../assets/enterprise.png'
import Group from '../../../../assets/group.png'
import Mark from '../../../../assets/mark.png'
import { Button } from 'antd'
import './organization.scss'
import SignupNavbar from '../signupNavbar'
import { Link } from 'react-router-dom'

export default function Payment() {
  const [switchBtn, setSwitchBtn] = useState(false)

  const HandleSwitch = () => {
    setSwitchBtn(!switchBtn)
  }

  return (
    <>
      <SignupNavbar />
      <div className="payment-container">
        <h2 className="pay-heading">Select the plan that fits your needs</h2>
        <p className="pay-text">
          Select from best plans and get access to unlimited access to our
          learning <br />
          stories tailored to your development needs. Change or cancel at <br />
          anytime
        </p>

        <div className="switch-btn" onClick={HandleSwitch}>
          <div className={`${switchBtn ? 'annually' : 'monthly'}`}>Monthly</div>
          <div className={`${!switchBtn ? 'annually' : 'monthly'}`}>
            Annually (Save 20%)
          </div>
        </div>

        <div className="payment-box">
          <div className="pay-box">
            <img src={Teams} alt="team icon" className="icon" />
            <div className="three">
              <p className="three-head">Small Teams</p>
              <p className="three-text">For your team </p>
              <div className="group-text">
                <img src={Group} alt="people icon" className="group" />
                <p>5-20 users</p>
              </div>
            </div>
            <div className="dollar">
              $200 <span className="dol-span">/month</span>
            </div>

            <Link to="/trial" className="link">
              <Button className="pay-btn">Start free trial</Button>
            </Link>

            <div className="options">
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>1 week of free trial</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>5 - 20 users</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>Access to 5 new stories each week</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>Unlimited access to archived content</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>5 admins</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>Administrator panel</p>
              </div>
            </div>
          </div>

          <div className="pay-box">
            <img src={Enterprise} alt="team icon" className="icon" />
            <div className="three">
              <p className="three-head">Enterprise</p>
              <p className="three-text">For your whole organization</p>
              <div className="group-text">
                <img src={Group} alt="people icon" className="group" />
                <p>More than 20 users</p>
              </div>
            </div>
            <p className="contact">Contact us for pricing</p>

            <Link to="/demo" className="link">
              <Button className="pay-btn" id='demo-btn'>Request a demo</Button>
            </Link>

            <div className="options">
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>1 week of free trial</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>5 - 20 users</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>Access to 5 new stories each week</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>Unlimited access to archived content</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>5 admins</p>
              </div>
              <div className="free-display">
                <img src={Mark} alt="mark icon" className="mark" />
                <p>Administrator panel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
