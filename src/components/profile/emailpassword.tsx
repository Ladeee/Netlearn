import { Button, Form, Input } from 'antd'
import './profile.scss'

export default function Emailpassword() {
  return (
    <>
      <div className="empass-container">
        <div className="empass-wrapper" id="p-border">
          <p className="change">Change your email</p>
          <Form className="profile-inputs">
            <div className="p-input-display">
              <Form.Item layout="vertical" label="Current email">
                <Input
                  className="profile-input"
                  placeholder="email@email.com"
                />
              </Form.Item>

              <Form.Item layout="vertical" label="New email">
                <Input
                  className="profile-input"
                  placeholder="Enter new email"
                />
              </Form.Item>
            </div>

            <Form.Item layout="vertical" label="Password" className="p-pass">
              <Input.Password
                className="profile-input"
                placeholder="Enter password"
              />
            </Form.Item>

            <Form.Item label={null} className="p-form-item">
              <Button type="primary" htmlType="submit">
                Reset email
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="empass-wrapper">
          <p className="change" id="change-pass">
            Change your password
          </p>
          <Form className="profile-inputs">
            <div className="p-input-display">
              <Form.Item layout="vertical" label="Current password">
                <Input
                  className="profile-input"
                  placeholder="Enter current password"
                />
              </Form.Item>

              <Form.Item layout="vertical" label="New password">
                <Input.Password
                  className="profile-input"
                  placeholder="Enter new password"
                />
              </Form.Item>
            </div>
            <p className="p-forgot">Forgot password ?</p>

            <Form.Item
              layout="vertical"
              label="Confirm password"
              className="p-pass"
            >
              <Input.Password
                className="profile-input"
                placeholder="Confirm new password"
              />
            </Form.Item>

            <Form.Item label={null} className="p-form-item">
              <Button type="primary" htmlType="submit">
                Reset password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}
