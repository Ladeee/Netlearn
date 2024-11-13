import { Form, Input, Button } from 'antd'
import './email.scss'
import SignupNavbar from '../signupNavbar'
import { Link } from 'react-router-dom'

export default function Email() {
  return (
    <>
      <SignupNavbar />
      <div className="email-container">
        <div className="email-wrapper">
          <h1 className="email-heading">Enter your Email</h1>
          <p className="email-text">
            Join our community and start your journey towards exceptional <br />
            customer service.
          </p>

          <Form className="ind-form">
            <Form.Item
              layout="vertical"
              name={['user', 'email']}
              label="Email address"
              colon={false}
              rules={[{ type: 'email' }]}
            >
              <Input
                placeholder="Enter email address"
                className="email-input"
              />
            </Form.Item>

            <Link to="/verify" className="link">
              <Form.Item className="ind-btn" label={null}>
                <Button type="primary" htmlType="submit" className="signup-btn">
                  Continue
                </Button>
              </Form.Item>
            </Link>
          </Form>
        </div>

        <div className="email-account">
          <div className="account">
            Already have an account? <span className="span">Sign in</span>
          </div>
          <div className="account" id="start">
            Want to sign up as an organization?{' '}
            <span className="span">Start here</span>
          </div>
        </div>
      </div>
    </>
  )
}
