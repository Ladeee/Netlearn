import { Link } from 'react-router-dom'
import Avatar from '../../../assets/avatar.png'
import Company from '../../../assets/company.png'
import SignupNavbar from './signupNavbar'
import './signup.scss'

export default function Signup() {
  return (
    <>
      <SignupNavbar />
      <div className="signup-container">
        <div className="signup-wrapper">
          <p className="type">Choose an Account Type</p>
          <h2 className="empower">Empower Your Skills,</h2>
          <h2 className="elevate">Elevate Your Service</h2>

          <div className="choice">
            <Link to="/email" className="link">
              <div className="choice-box">
                <img src={Avatar} alt="" className="avatar" />
                <div className="ind">
                  <p className="heading">Individual</p>
                  <p className="sign-text">
                    As an individual user, you'll have access to a variety of{' '}
                    <br />
                    scenarios designed to enhance your customer service skills.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/payment" className="link">
              <div className="choice-box">
                <img src={Company} alt="" className="company" />
                <div className="ind">
                  <p className="heading">Organization</p>
                  <p className="sign-text">
                    As an organization, you'll be able to manage multiple users{' '}
                    <br />
                    and track group progress in your organization.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="account">
          Already have an account?{' '}
          <Link to="/welcome" className="link">
            <span className="span">Sign in</span>
          </Link>
        </div>
      </div>
    </>
  )
}
