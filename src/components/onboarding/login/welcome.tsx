import { Button, Card, Checkbox, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import Left from '../../../assets/left-img.png'
import Right from '../../../assets/right-img.png'
import '../signup/email/email.scss'
import SignupNavbar from '../signup/signupNavbar'

type FormType = {
  email?: string
  password?: string
}

export default function Welcome() {
  const handleFinish = (values: FormType) => {
    console.log('Form Values:', values)
  }

  return (
    <div className="container">
      <div className="background-img">
        <img src={Left} alt="left background img" className="left-img" />
        <img src={Right} alt="right background img" className="right-img" />
      </div>
      <div className="bar-background">
        <SignupNavbar />
      </div>
      <div className="sigin-login">
        <Card className="individual-wrapper" id="card">
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
        </Card>
      </div>
    </div>
  )
}
