import { useState } from 'react'
import Illustration from '../../assets/illustration.png'
// import Star from '../../assets/star.png'
// import Sstar from '../../assets/s-star.png'
// import Circle from '../../assets/circle.png'

import DashNavbar from './dashnavbar'
import './dashboard.scss'
import { Button } from 'antd'

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
        <div className="d-welcome-wrapper">
          <div className="welcome-texts">
            <p className="welcome-back">
              Welcome back <span>Ayomide Shotayo</span>[Company name]
            </p>
            <p className="master">
              Your dashboard is your central hub for tracking feedback and
              monitoring your learning journey. <br />
              Get insights on your strengths, areas for improvement, and see
              your progress toward mastering <br />
              essential skills.
            </p>

            <Button className='explore-btn'>Explore recommended learnings</Button>
          </div>

          <img src={Illustration} alt="illustration" className="bulb" />
        </div>
      </div>
    </div>
  )
}
