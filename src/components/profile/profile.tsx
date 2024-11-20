import { useRef, useState } from 'react'
import Photo from '../../assets/photo.png'
import './profile.scss'
import { Button, Form, Input } from 'antd'

type FormType = {
  firstName?: string
  lastName?: string
  job?: string
  department?: string
  company?: string
  email?: string
  linkedin?: string
  twitter?: string
}

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const convertFile = (files: FileList | null) => {
    if (files && files[0]) {
      const fileRef = files[0];
      const fileType = fileRef.type;

      console.log("Selected file type:", fileType);

      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        setSelectedImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  };

  const handleFinish = (values: FormType) => {
    console.log('Form Values:', values, { selectedImage })
  }

  return (
    <>
      <div className="profile-container">
        <p className="photo-text">Your photo</p>
        <div className="click-photo">
          <div className="selected">
          {selectedImage.indexOf('image/') > -1 ? (
            <img src={selectedImage} alt='uploaded' className="photo" />
          ) : (
            <div className="photo-input">
              <img src={Photo} alt='upload' className="photo" />
              <div className="img-input">
                <input
                  type="file"
                  onChange={(e) => convertFile(e.target.files)}
                  ref={fileInputRef}
                />
              </div>
            </div>
          )}
          </div>

          <div className="click">
            <p className="upload" onClick={handleClick}>Click to upload</p>
            <p className="svg">SVG, PNG or JPG (max. size of 400 x 400px)</p>
          </div>
        </div>

        <Form className="p-form" onFinish={handleFinish}>
          <div className="p-input-display" id="p-padding">
            <Form.Item layout="vertical" label="First name" name="firstName">
              <Input placeholder="Ayomide" className="profile-input" />
            </Form.Item>
            <Form.Item layout="vertical" label="Last name" name="lastName">
              <Input placeholder="Shotayo" className="profile-input" />
            </Form.Item>
          </div>

          <div className="p-input-display" id="p-padding">
            <Form.Item layout="vertical" label="Job role" name="job">
              <Input placeholder="Retailer" className="profile-input" />
            </Form.Item>
            <Form.Item layout="vertical" label="Department" name="department">
              <Input placeholder="Finance" className="profile-input" />
            </Form.Item>
          </div>

          <div className="p-input-display" id="p-hr">
            <Form.Item layout="vertical" label="Company name" name="company">
              <Input placeholder="Netlearn" className="profile-input" />
            </Form.Item>
            <Form.Item layout="vertical" label="Email" name="email">
              <Input
                placeholder="ayomide@gmail.com"
                type="email"
                className="profile-input"
              />
            </Form.Item>
          </div>

          <div className="social-display">
            <p className="social">Social</p>
            <div className="p-input-display" id="p-hr">
              <Form.Item layout="vertical" label="LinkedIn" name="linkedin">
                <Input
                  prefix="http://"
                  className="profile-input"
                />
                <p className="down-label">Input your LinkedIn URL</p>
              </Form.Item>
              <Form.Item layout="vertical" label="Twitter" name="twitter">
                <Input
                  prefix="http://"
                  className="profile-input"
                />
                <p className="down-label">Input your Twitter URL</p>
              </Form.Item>
            </div>
          </div>

          <div className="member-display">
            <p className="member">Member since</p>
            <p className="p-date">June 10,2024</p>
          </div>

          <div className="p-btn-display">
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" className="p-btn">
                Update profile
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  )
}
