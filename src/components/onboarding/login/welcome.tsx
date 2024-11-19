import { Button, Checkbox, Form, Input } from 'antd'
import '../signup/email/email.scss'
import { Link } from 'react-router-dom'
import Signup from '../signup'

type FormType = {
  email?: string
  password?: string
}

export default function Welcome() {
  const handleFinish = (values: FormType) => {
    console.log('Form Values:', values)
  }

  return (
    <div className="welcome-container">
      <Signup>
        <div className="individual-container">
          <h2 className="ind-heading">Log in to Netlearn</h2>

          <Form className="ind-form" onFinish={handleFinish}>
            <Form.Item layout="vertical" label="Email address" name="email">
              <Input placeholder="e.g example@gmail.com" type="email" />
            </Form.Item>

            <Form.Item
              layout="vertical"
              label="Password"
              className="ind-password"
              name="password"
            >
              <Input.Password
                placeholder="Create your password"
                className="password-input"
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
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Signup>
    </div>
  )
}
