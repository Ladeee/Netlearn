import Logo from '../../../assets/logo.png'
import "../signup/signup.scss"

export default function SignupNavbar() {
  return (
    <div className="logo-container">
        <img src={Logo} alt="" className="signup-logo" />
      </div>
  )
}
