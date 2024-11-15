import { Button, Card, Form, Input, Select } from 'antd'
import '../email/email.scss'
import SignupNavbar from '../signupNavbar'
import { Link } from 'react-router-dom'

// type FormType = {
//   firstName?: string
//   lastName?: string
//   email?: string
//   organization?: string
//   industry?: string
//   teamSize?: string
//   job?: string
//   department?: string
//   country?: string
//   app?: string
// }

const { Option } = Select
const { TextArea } = Input

export default function Demo() {
  return (
    <>
      <SignupNavbar />
      <div className="individual-container">
        <Card className="individual-wrapper" id="card">
          <h2 className="ind-heading">Get your Demo</h2>
          <p className="ind-text">Create your organization account</p>

          <Form className="ind-form">
            <div className="input-display">
              <Form.Item layout="vertical" label="First name">
                <Input placeholder="First name" />
              </Form.Item>

              <Form.Item layout="vertical" label="Last name">
                <Input placeholder="Last name" />
              </Form.Item>
            </div>

            <Form.Item
              className="org"
              layout="vertical"
              label="Work email address"
            >
              <Input placeholder="Enter work email address" />
            </Form.Item>

            <Form.Item className="org" layout="vertical" label="Organization">
              <Input placeholder="Enter organization name" />
            </Form.Item>

            <div className="input-display" id="dep-title">
              <Form.Item layout="vertical" label="Industry">
                <Select placeholder="Select industry" className="select">
                  <Option value="admin">industry</Option>
                </Select>
              </Form.Item>

              <Form.Item layout="vertical" label="Team size">
                <Select placeholder="Select team size" className="select">
                  <Option value="admin">department</Option>
                </Select>
              </Form.Item>
            </div>

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
              label="Organization's country"
              className="country"
            >
              <Select
                placeholder="Select organization's country"
                className="select"
              >
                <Option value="admin">country</Option>
              </Select>
            </Form.Item>

            <Form.Item
              className="textarea-box"
              layout="vertical"
              label="Organization needs"
            >
              <TextArea
                placeholder="What are your organization's training needs? (Optional)"
                rows={4}
                maxLength={200}
                className="textarea"
              />
            </Form.Item>

            <Form.Item className="ind-btn" label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <div className="ind-account">
          Already have an account?{' '}
          <Link to="/welcome" className="link">
            <span className="acc-span">Sign in</span>
          </Link>
        </div>

        <div className="start-acc">
          Want to sign up as an individual?{' '}
          <Link to="/individual" className="link">
            <span className="acc-span">Start here</span>
          </Link>
        </div>
      </div>
    </>
  )
}
