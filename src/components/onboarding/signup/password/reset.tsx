import Minus from '../../../../assets/minus.png'
import Greencheck from '../../../../assets/greencheck.png'
import { Button, Card, Form, Input } from 'antd'
import '../email/email.scss'
import { useState } from 'react'
import SignupNavbar from '../signupNavbar'

// type FormType = {
//   password?: string
//   confirmPassword?: string
// }

export default function Reset() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLengthValid, setIsLengthValid] = useState(false)
  const [isCaseValid, setIsCaseValid] = useState(false)
  const [isSpecialValid, setIsSpecialValid] = useState(false)
  const [, setPasswordMatch] = useState(false)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)

    // Validate the password requirements
    setIsLengthValid(value.length >= 8)
    setIsCaseValid(/[a-z]/.test(value) && /[A-Z]/.test(value))
    setIsSpecialValid(/[!@#$%^&*?]/.test(value))
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value
    setConfirmPassword(value)

    // Check if passwords match
    setPasswordMatch(value === password)
  }

  return (
    <>
      <SignupNavbar />
      <div className="individual-container" id="reset-wrapper">
        <Card className="reset-wrapper" id="card">
          <h2 className="ind-heading">Reset your Password</h2>

          <Form className="ind-form">
            <Form.Item
              layout="vertical"
              label="Password"
              className="ind-password"
            >
              <Input.Password
                placeholder="Create new password"
                className="password-input"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Item>

            <div className="password-requirements">
              <div className="req-display">
                <div className="change-icon">
                  <img
                    src={isLengthValid ? Greencheck : Minus}
                    alt={isLengthValid ? 'greencheck icon' : 'minus icon'}
                    className={isLengthValid ? 'green-check' : 'minus'}
                  />
                </div>
                <p className={`${isLengthValid ? 'req-texts' : ''}`}>
                  Must be at least 8 characters
                </p>
              </div>

              <div className="req-display">
                <div className="change-icon">
                  <img
                    src={isCaseValid ? Greencheck : Minus}
                    alt={isCaseValid ? 'greencheck icon' : 'minus icon'}
                    className={isCaseValid ? 'green-check' : 'minus'}
                  />
                </div>
                <p className={`${isCaseValid ? 'req-texts' : ''}`}>
                  Must have a combination of uppercase and lowercase
                </p>
              </div>

              <div className="req-display">
                <div className="change-icon">
                  <img
                    src={isSpecialValid ? Greencheck : Minus}
                    alt={isSpecialValid ? 'greencheck icon' : 'minus icon'}
                    className={isSpecialValid ? 'green-check' : 'minus'}
                  />
                </div>
                <p className={`${isSpecialValid ? 'req-texts' : ''}`}>
                  Must contain at least 1 special character (e.g: !@#$%^&*?)
                </p>
              </div>
            </div>

            <Form.Item
              className="pass-margin"
              layout="vertical"
              label="Confirm password"
            >
              <Input.Password
                placeholder="Confirm your new password"
                className="password-input"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </Form.Item>

            <Form.Item className="ind-btn" label={null}>
              <Button type="primary" htmlType="submit">
                Reset Password
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  )
}
