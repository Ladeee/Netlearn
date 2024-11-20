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
                {linkedAccounts.linkedin ? 'Connected' : 'Connect'}
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
                {linkedAccounts.twitter ? 'Connected' : 'Connect'}
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
                {linkedAccounts.google ? 'Connected' : 'Connect'}
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
                {linkedAccounts.gmail ? 'Connected' : 'Connect'}
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
                {linkedAccounts.outlook ? 'Connected' : 'Connect'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
