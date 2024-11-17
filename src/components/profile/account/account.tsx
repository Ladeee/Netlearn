import LinkedIn from '../../../assets/linkedin.png'
import Twitter from '../../../assets/twitter.png'
import Google from '../../../assets/google.png'
import Gmail from '../../../assets/gmail.png'
import Outlook from '../../../assets/outlook.png'
import { Button } from 'antd'
import './account.scss'
import { useState } from 'react'

type AccountType = {
  linkedin: boolean
  twitter: boolean
  google: boolean
  gmail: boolean
  outlook: boolean
}

export default function Account() {
  const [linkedAccounts, setLinkedAccounts] = useState<AccountType>({
    linkedin: false,
    twitter: false,
    google: false,
    gmail: false,
    outlook: false,
  })

  const HandleLink = (account: keyof AccountType) => {
    setLinkedAccounts((prevState) => ({
      ...prevState,
      [account]: !prevState[account],
    }))
  }

  return (
    <>
      <div className="account-container">
        <p className="a-heading">Linked accounts</p>

        <div className="accs-wrapper">
          <div className="accs">
            <img src={LinkedIn} alt="linkedIn icon" className="linkedin" />
            <div className="a-img-text">
              <p className="a-icon-name">LinkedIn</p>
              <p className="a-text">
                Link you LinkedIn account to get more personalized immersions
              </p>
            </div>
            <div onClick={() => HandleLink('linkedin')} className="a-btn">
              <Button
                className={`${
                  linkedAccounts.linkedin ? 'a-active' : 'a-unactive'
                }`}
              >
                {linkedAccounts.linkedin ? 'Unlink account' : 'Link account'}
              </Button>
            </div>
          </div>

          <div className="accs">
            <img src={Twitter} alt="twitter icon" className="a-icon" />
            <div className="a-img-text">
              <p className="a-icon-name">Twitter</p>
              <p className="a-text">
                Link you Twitter account to get more personalized immersions
              </p>
            </div>
            <div onClick={() => HandleLink('twitter')} className="a-btn">
              <Button
                className={`${
                  linkedAccounts.twitter ? 'a-active' : 'a-unactive'
                }`}
              >
                {linkedAccounts.twitter ? 'Unlink account' : 'Link account'}
              </Button>
            </div>
          </div>

          <div className="accs">
            <img src={Google} alt="google icon" className="a-icon" />
            <div className="a-img-text">
              <p className="a-icon-name">Google calender</p>
              <p className="a-text">
                Link you Google calender to get more personalized immersions
              </p>
            </div>
            <div onClick={() => HandleLink('google')} className="a-btn">
              <Button
                className={`${
                  linkedAccounts.google ? 'a-active' : 'a-unactive'
                }`}
              >
                {linkedAccounts.google ? 'Unlink account' : 'Link account'}
              </Button>
            </div>
          </div>

          <div className="accs">
            <img src={Gmail} alt="gmail icon" className="a-icon" />
            <div className="a-img-text">
              <p className="a-icon-name">Gmail</p>
              <p className="a-text">
                Link you Gmail account to get more personalized immersions
              </p>
            </div>
            <div onClick={() => HandleLink('gmail')} className="a-btn">
              <Button
                className={`${
                  linkedAccounts.gmail ? 'a-active' : 'a-unactive'
                }`}
              >
                {linkedAccounts.gmail ? 'Unlink account' : 'Link account'}
              </Button>
            </div>
          </div>

          <div className="accs" id="acc-hr">
            <img src={Outlook} alt="outlook icon" className="a-icon" />
            <div className="a-img-text">
              <p className="a-icon-name">Outlook</p>
              <p className="a-text">
                Link you LinkedIn account to get more personalized immersions
              </p>
            </div>
            <div onClick={() => HandleLink('outlook')} className="a-btn">
              <Button
                className={`${
                  linkedAccounts.outlook ? 'a-active' : 'a-unactive'
                }`}
              >
                {linkedAccounts.outlook ? 'Unlink account' : 'Link account'}
              </Button>
            </div>
          </div>
        </div>

        <div className="account-actions">
          <p className="a-heading">Account actions</p>
          <div className="accs" id="accs">
            <div className="a-img-text" id="left-actions">
              <p className="a-icon-name" id="act-padd">
                Pause account
              </p>
              <p className="a-text">
                Temporarily disable your account and pause your active
                subscription. You will not have access to your <br />
                account until it is unpaused, but your data and settings will be
                preserved.
              </p>
            </div>

            <div onClick={() => HandleLink('linkedin')} className="a-btn">
              <Button className="a-unactive">Pause account</Button>
            </div>
          </div>

          <div className="act" id="accs">
            <div className="a-img-text" id="left-actions">
              <p className="a-icon-name">Delete account</p>
              <p className="a-text">
                Permanently delete your account, including all personal
                information and immersion progress from <br />
                Netlearn. This action is irreversible and will terminate access,
                remove all data, and clear your personal <br />
                information from our system.
              </p>
            </div>
            <div onClick={() => HandleLink('linkedin')} className="a-btn">
              <Button className="delete-btn">Delete account</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
