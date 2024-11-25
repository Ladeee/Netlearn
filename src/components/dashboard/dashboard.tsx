import { useState } from 'react'
import Illustration from '../../assets/illustration.png'
import Star from '../../assets/star.png'
import Sstar from '../../assets/s-star.png'
import Circle from '../../assets/circle.png'

import DashNavbar from './dashnavbar'
import './dashboard.scss'
import { Button } from 'antd'
import Feedback from './feedback'
import Learn from './learn'

export default function Dashboard() {
  const [switchSkills, setSwitchSkills] = useState('skills')

  const HandleSkill = (active: string) => {
    setSwitchSkills(active)
  }

  return (
    <div className="dashboard-container">
      <DashNavbar />
      <div className="skills-act">
        <p
          className={`${switchSkills === 'skills' && 'skill-border'}`}
          onClick={() => HandleSkill('skills')}
        >
          Skills & Feedback
        </p>
        <p
          className={`${switchSkills === 'acts' && 'skill-border'}`}
          onClick={() => HandleSkill('acts')}
        >
          Learning Activity
        </p>
      </div>

      <div className="dash-welcome">
        <div className="dtop-icons">
          <img src={Star} alt="star icon" className="star" />
          <img src={Sstar} alt="special star icon" className="sstar" />
          <img src={Circle} alt="" className="circle" />
          <img src={Star} alt="star icon" className="star-two" />
          <img src={Sstar} alt="special star icon" className="sstar-two" />
        </div>
        <div className="d-welcome-wrapper">
          <div className="welcome-texts">
            <p className="welcome-back">
              Welcome back <span className="ayo">Ayomide Shotayo</span>{' '}
              <span className="com">[Company name]</span>
            </p>
            <p className="master">
              Your dashboard is your central hub for tracking feedback and
              monitoring your learning journey. <br />
              Get insights on your strengths, areas for improvement, and see
              your progress toward mastering <br />
              essential skills.
            </p>

            <Button className="explore-btn">
              Explore recommended learnings
            </Button>
          </div>

          <img src={Illustration} alt="illustration" className="bulb" />
        </div>
      </div>

      <div className="skills-act-switch">
        {switchSkills === 'skills' && <Feedback />}
        {switchSkills === 'acts' && <Learn />}
      </div>
    </div>
  )
}
