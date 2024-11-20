import { Button, Form, Input } from 'antd'
import '../profile.scss'

type FormType = {
  currentPassword?: string
  newPassword?: string
  confirmPassword?: string
}

export default function Emailpassword() {
  const handleFinish = (values: FormType) => {
    console.log('Form Values:', values)
  }

  return (
    <>
      <div className="empass-container">
        <Form className="profile-inputs" onFinish={handleFinish}>
          <div className="empass-wrapper">
            <p className="change">Change your password</p>
            <Form.Item
              layout="vertical"
              label="Current password"
              className="p-pass"
              name="currentPassword"
            >
              <Input.Password
                className="profile-input"
                placeholder="Enter current password"
              />
            </Form.Item>

            <p className="p-forgot">Forgot password ?</p>

            <div className="em-input-display">
              <Form.Item
                layout="vertical"
                label="New password"
                name="newPassword"
              >
                <Input
                  className="profile-input"
                  placeholder="Enter new password"
                />
              </Form.Item>

              <Form.Item
                layout="vertical"
                label="Confirm password"
                name="confirmPassword"
              >
                <Input
                  className="profile-input"
                  placeholder="Confirm new password"
                />
              </Form.Item>
            </div>
          </div>

          <Form.Item label={null} className="p-form-item">
            <Button type="primary" htmlType="submit">
              Reset password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
