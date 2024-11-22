import { useState } from 'react'
import Logo from '../../../assets/logo.png'
import Notification from '../../../assets/notification.png'
import Initials from '../../../assets/as.png'
import Hamburger from '../../../assets/hamburger.png'
import Search from '../../../assets/search-icon.png'
import { Input } from 'antd'
import './dashnavbar.scss'

export default function DashNavbar() {
  const [switchDash, setSwitchDash] = useState('dashboard')

  const HandleSwitch = (active: string) => {
    setSwitchDash(active)
  }

  return (
    <div className="dashnavbar-container">
      <div className="logo-search">
        <img src={Logo} alt="logo" className="dash-logo" />
        <div className="search">
          <img src={Search} alt="search icon" className="search-icon" />
          <Input placeholder="Search" className="search-input" />
        </div>
      </div>

      <div className="noti-ava">
        <div className="show-dot">
          {switchDash === 'learning' && <div className="d-dot" />}
          <p
            className={`${switchDash === 'learning' && 'add-dot'}`}
            onClick={() => HandleSwitch('learning')}
          >
            My learning
          </p>
        </div>
        <div className="show-dot">
          {switchDash === 'dashboard' && <div className="d-dot" />}
          <p
            className={`${switchDash === 'dashboard' && 'add-dot'}`}
            onClick={() => HandleSwitch('dashboard')}
          >
            Dashboard
          </p>
        </div>
        <img src={Notification} alt="notification" className="d-noti" />

        <div className="ham-ava">
          <img src={Hamburger} alt="hamburger" className="hamburger" />
          <img src={Initials} alt="initials" className="initials" />
        </div>
      </div>
    </div>
  )
}
