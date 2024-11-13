import { Button, Card, Form, Input } from 'antd'
import '../email/email.scss'
import SignupNavbar from '../signupNavbar'
import { Link } from 'react-router-dom'

// type FormType = {
//   email?: string
// }

export default function Forgot() {
  return (
    <>
      <SignupNavbar />
      <div className="individual-container" id="reset-wrapper">
        <Card className="individual-wrapper" id="card">
          <h2 className="ind-heading">Forgot your Password</h2>
          <p className="ind-text">
            Simply enter the email address associated with your account and
            we'll <br />
            send you an email with instructions on how to reset your password.
          </p>

          <Form className="ind-form">
            <Form.Item
              className="org"
              layout="vertical"
              label="Work email address"
            >
              <Input placeholder="e.g example@gmail.com" />
            </Form.Item>

            <Link to="/verify" className="link">
              <Form.Item className="ind-btn" label={null}>
                <Button type="primary" htmlType="submit">
                  Verify Email
                </Button>
              </Form.Item>
            </Link>
          </Form>
        </Card>

        <Link to="/welcome" className="link">
          <div className="ind-account">
            {' '}
            <span className="acc-span">Back to Login</span>
          </div>
        </Link>
      </div>
    </>
  )
}
