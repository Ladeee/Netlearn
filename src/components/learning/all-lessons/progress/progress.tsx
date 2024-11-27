import Youtube from '../../../../assets/youtube.png'
import Vid from '../../../../assets/video.png'
import Skill from '../../../../assets/skill.png'
import Screw from '../../../../assets/screw.png'
import People from '../../../../assets/people.png'
import Person from '../../../../assets/person.png'
import Bar from '../../../../assets/grey-bar.png'
import { progress } from './inprogress'
import './progress.scss'

export default function Progress() {
  return (
    <div className="progress-container">
      <div className="progress-card">
        {progress.map((info) => (
          <div className="progress-wrapper" key={info.id}>
            <img src={Vid} alt="video" className="video" />
            <p className="title">{info.title}</p>
            <div className="you-text">
              <div className="you-image">
                <img src={Youtube} alt="youTube" className="youtube" />
                <p className="you">YouTube</p>
              </div>
              <div className="p-dot" />
              <div className="by">
                <p>By:</p>
                <img src={Person} alt="person" className="person" />
                <p>{info.author}</p>
              </div>
            </div>

            <p className="p-focu">Focus area: </p>
            <div className="progress-btn">
              <div className="project" id="skill">
                <img src={Skill} alt="skill icon" className="prog-icon" />
                <p>Project Planning</p>
              </div>
              <div className="project" id="screw">
                <img src={Screw} alt="screw icon" className="prog-icon" />
                <p>Product Knowledge</p>
              </div>
            </div>
            <div className="project" id="know">
              <img src={People} alt="people icon" className="prog-icon" />
              <p>Technical know-how</p>
            </div>

            <div className="bar-track">
              <img src={Bar} alt="bar" className="prog-bar" />
              <p className="bar-number">65%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
