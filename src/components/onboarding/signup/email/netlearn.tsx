import Minus from '../../../../assets/minus.png'
import Greencheck from '../../../../assets/greencheck.png'
import { Button, Checkbox, Form, Input, Select } from 'antd'
import { useState } from 'react'
import Lattice from './lattice'
import './email.scss'

type FormType = {
  firstName?: string
  lastName?: string
  job?: string
  department?: string
  password?: string
  confirmPassword?: string
}

const { Option } = Select

export default function Netlearn() {
  const [switchStep, setSwitchStep] = useState(false)
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

  const handleFinish = (values: FormType) => {
    console.log('Form Values:', values)
    setSwitchStep(true)
  }

  return (
    <>
        <div className="individual-container">
          <h2 className="ind-heading">
            {!switchStep ? 'Welcome to Netlearn' : 'Connect to Lattice'}
          </h2>
          <p className="ind-text">
            {!switchStep ? (
              <p>Set up your account</p>
            ) : (
              <p>
                Connect your organization's admin account for Lattice to
                seamlessly <br />
                integrate feedback data.
              </p>
            )}
          </p>

          <div className="step-display">
            <p className="step-step">
              {!switchStep ? 'Step 1 of 2' : 'Step 2 of 2'}
            </p>
            <div className="next-step">
              <div className={`${!switchStep ? 'active-steps' : 'steps'}`} />
              <div className={`${switchStep ? 'active-steps' : 'steps'}`} />
            </div>
          </div>

          {!switchStep ? (
            <Form className="ind-form" onFinish={handleFinish}>
              <Form.Item layout="vertical" label="Email address" name="email">
                <Input type="email" placeholder="Email@gmail.com" />
              </Form.Item>

              <div className="input-display">
                <Form.Item
                  layout="vertical"
                  label="First name"
                  name="firstName"
                >
                  <Input placeholder="First name" />
                </Form.Item>

                <Form.Item layout="vertical" label="Last name" name="lastName">
                  <Input placeholder="Last name" />
                </Form.Item>
              </div>

              <div className="input-display" id="dep-title">
                <Form.Item layout="vertical" label="Job title" name="job">
                  <Input placeholder="Enter job title" />
                </Form.Item>

                <Form.Item
                  layout="vertical"
                  label="Department"
                  name="department"
                >
                  <Select placeholder="Select department" className="select">
                    <Option value="department">department</Option>
                  </Select>
                </Form.Item>
              </div>

              <Form.Item
                layout="vertical"
                label="Password"
                className="ind-password"
                name="password"
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
                name="confirmPassword"
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
                  Next
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Lattice />
          )}
        </div>
    </>
  )
}
