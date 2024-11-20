import { Button } from 'antd'
import Logo from '../../../assets/logo.png'
import Menu from '../../../assets/menu.png'
import '../signup/signup.scss'

export default function SignupNavbar() {
  return (
    <div className="logo-container">
      <img src={Logo} alt="signup logo" className="signup-logo" />
      <div className="menu">
        {' '}
        <Button className="request-btn">Request a Demo</Button>
        <img src={Menu} alt="menu icon" className="menu-icon" />
      </div>
    </div>
  )
}
