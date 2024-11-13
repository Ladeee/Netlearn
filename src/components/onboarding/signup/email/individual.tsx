import Minus from '../../../../assets/minus.png'
import Greencheck from '../../../../assets/greencheck.png'
import { Button, Card, Checkbox, Form, Input, Select } from 'antd'
import './email.scss'
import { useState } from 'react'
import SignupNavbar from '../signupNavbar'
import { Link } from 'react-router-dom'

// type FormType = {
//   firstName?: string
//   lastName?: string
//   organization?: string
//   job?: string
//   department?: string
//   password?: string
//   confirmPassword?: string
// }

const { Option } = Select

export default function Individual() {
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
      <div className="individual-container">
        <Card className="individual-wrapper" id="card">
          <h2 className="ind-heading">Create your Account</h2>
          <p className="ind-text">
            Join our community and start your journey towards exceptional <br />
            customer service.
          </p>
          {/* <div className="i-form"> */}
          <Form className="ind-form">
            <div className="input-display">
              <Form.Item layout="vertical" label="First name">
                <Input placeholder="First name" />
              </Form.Item>

              <Form.Item layout="vertical" label="Last name">
                <Input placeholder="Last name" />
              </Form.Item>
            </div>
            <Form.Item className="org" layout="vertical" label="Organization">
              <Input placeholder="Enter organization name" />
            </Form.Item>

            <div className="input-display" id="dep-title">
              <Form.Item layout="vertical" label="Job title">
                <Input placeholder="Enter job title" />
              </Form.Item>

              <Form.Item layout="vertical" label="Department">
                <Select placeholder="Select department" className="select">
                  <Option value="admin">department</Option>
                </Select>
              </Form.Item>
            </div>
            <Form.Item
              layout="vertical"
              label="Password"
              className="ind-password"
            >
              <Input.Password
                placeholder="Create your password"
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
                placeholder="Confirm your password"
                className="password-input"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </Form.Item>

            <div className="agreement">
              <Checkbox className="agree-checkbox" />
              <div className="agree-texts">
                I agree to Netlearn's{' '}
                <span className="agree-span">Terms & Conditions</span>
              </div>
            </div>

            <Form.Item className="ind-btn" label={null}>
              <Button type="primary" htmlType="submit">
                Create account
              </Button>
            </Form.Item>
          </Form>
          {/* </div> */}
        </Card>
        <div className="ind-account">
          Already have an account?{' '}
          <Link to="/welcome" className="link">
            <span className="acc-span">Sign in</span>
          </Link>
        </div>
      </div>
    </>
  )
}
