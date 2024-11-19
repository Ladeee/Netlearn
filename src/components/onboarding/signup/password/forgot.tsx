import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import Signup from '..'
import '../email/email.scss'

type FormType = {
  email?: string
}

export default function Forgot() {
  const navigate = useNavigate()

  const handleFinish = (values: FormType) => {
    console.log('Form Values:', values)
    navigate('/reset')
  }

  return (
    <div className="forgot-container">
      <Signup>
        <div className="individual-container">
          <h2 className="ind-heading">Forgot your Password</h2>
          <p className="ind-text" id="not-mobile">
            Simply enter the email address associated with your account and
            we'll <br />
            send you an email with instructions on how to reset your password.
          </p>

          <p className="mobile-text">Enter your email to reset your password</p>

          <Form className="ind-form" onFinish={handleFinish}>
            <Form.Item layout="vertical" label="Email" name="email">
              <Input placeholder="e.g example@gmail.com" />
            </Form.Item>

            <Form.Item className="ind-btn" label={null}>
              <Button type="primary" htmlType="submit">
                Reset Password
              </Button>
            </Form.Item>
          </Form>

          <Link to="/welcome" className="link">
            <p className="login">Back to Login</p>
          </Link>
        </div>
      </Signup>
    </div>
  )
}
