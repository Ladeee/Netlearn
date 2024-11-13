import React from 'react'
import EmailIcon from '../../../../assets/email.png'
import './email.scss'
import SignupNavbar from '../signupNavbar'

export default function Verify() {
  return (
    <>
      <SignupNavbar />
      <div className="verify-container">
        <div className="verify-wrapper">
          <h1 className="email-heading">Verify email address</h1>
          <p className="email-text">
            We've sent a verification link to{' '}
            <span id="email-span">johndoe@email.com.</span> Please check your{' '}
            <br />
            inbox and click on the link to verify your email address.
          </p>
          <img src={EmailIcon} alt="" className="email-icon" />
          <p className="resend">
            If you don't see the email, check your spam folder or click below to
            resend.
          </p>
        </div>

        <div className="account">
          Didn't get a code? <span className="span">Resend code</span>
        </div>
      </div>
    </>
  )
}
