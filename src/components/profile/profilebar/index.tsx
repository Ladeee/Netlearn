import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Profile from '../profile'
import Emailpassword from '../emailpassword'
import Account from '../account/account'
import Notification from '../notification/notification'
import './profilebar.scss'

export default function ProfileBar() {
  const [activeSection, setActiveSection] = useState('account')

  const HandleProfile = (section: string) => {
    setActiveSection(section)
  }

  return (
    <>
      <div className="profilebar-wrapper">
        <div className="switch-text">
          {/* {profile ? ( */}
          <h2 className="settings">Settings</h2>
          {/* ) : ( */}
          {/* <h2 className="settings">Invite new user</h2> */}
          {/* )} */}
          <div className="close">
            <IoMdClose className="close-icon" />
          </div>
        </div>

        <div className="profilebar-settings">
          <p
            onClick={() => HandleProfile('profile')}
            className={`${activeSection === 'profile' && 'hover'}`}
          >
            My profile
          </p>
          <p
            onClick={() => HandleProfile('emailPassword')}
            className={`${activeSection === 'emailPassword' && 'hover'}`}
          >
            Email & Password
          </p>
          <p
            onClick={() => HandleProfile('account')}
            className={`${activeSection === 'account' && 'hover'}`}
          >
            Account integration
          </p>
          <p
            onClick={() => HandleProfile('notification')}
            className={`${activeSection === 'notification' && 'hover'}`}
          >
            Notification
          </p>
        </div>
      </div>

      <div className="profile-display">
        {activeSection === 'profile' && <Profile />}
        {activeSection === 'emailPassword' && <Emailpassword />}
        {activeSection === 'account' && <Account />}
        {activeSection === 'notification' && <Notification />}
      </div>
    </>
  )
}
