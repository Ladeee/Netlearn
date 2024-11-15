import { Button, Card, Checkbox, Form, Input } from 'antd'
import '../signup/email/email.scss'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import SignupNavbar from '../signup/signupNavbar'

// type FormType = {
//   email?: string
//   password?: string
// }

export default function Welcome() {
  // const [password] = useState('')

  return (
    <>
      <SignupNavbar />
      <div className="individual-container" id="reset-wrapper">
        <Card className="individual-wrapper" id="card">
          <h2 className="ind-heading">Welcome Back!</h2>

          <Form className="ind-form">
            <Form.Item
              className="org"
              layout="vertical"
              label="Work email address"
            >
              <Input placeholder="e.g example@gmail.com" />
            </Form.Item>

            <Form.Item
              layout="vertical"
              label="Password"
              className="ind-password"
            >
              <Input.Password
                placeholder="Create your password"
                className="password-input"
                // value={password}
              />
            </Form.Item>

            <div className="remember-wrapper">
              <div className="remember">
                <Checkbox className="rem-checkbox" />
                <p className="rem-text">Remember me</p>
              </div>

              <Link to="/forgot" className="link">
                <p className="rem-forgot">Forgot Password?</p>
              </Link>
            </div>

            <Form.Item className="ind-btn" label={null}>
              <Button type="primary" htmlType="submit" className="rem-btn">
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <div className="ind-account">
          Don't have an account?{' '}
          <Link to="/individual" className="link">
            <span className="acc-span">Create account</span>
          </Link>
        </div>
      </div>
    </>
  )
}
