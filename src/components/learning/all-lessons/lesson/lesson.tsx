import Add from '../../../../assets/add.png'
import Youtube from '../../../../assets/youtube.png'
import Vid from '../../../../assets/video.png'
import Skill from '../../../../assets/skill.png'
import Screw from '../../../../assets/screw.png'
import People from '../../../../assets/people.png'
import Person from '../../../../assets/person.png'
import { IoMdCheckmark } from 'react-icons/io'
import { lessons } from './lessons'
import '../all-lessons.scss'

export default function Lessons({ completed }: any) {
  return (
    <div className="lessons-container">
      {lessons.map((info) => (
        <div className="lesson-wrapper">
          <img src={Vid} alt="video" className="vid" />
          <div className="about-vid">
            <h2 className="title">{info.title}</h2>
            <p className="text">{info.course}</p>
            <div className="you-text">
              <div className="you-image">
                <img src={Youtube} alt="youTube" className="youtube" />
                <p className="you">YouTube</p>
              </div>
              <div className="c-dot" />
              <div className="by">
                <p>By:</p>
                <img src={Person} alt="person" className="person" />
                <p>{info.author}</p>
              </div>
            </div>

            <div className={`${completed ? "completed-margin" : "courses-display" }`}>
              <p className="focus">Focus skill area:</p>
              <div className="courses-btn">
                <div className="project" id="skill">
                  <img src={Skill} alt="skill icon" className="cou-icon" />
                  <p>Project Planning</p>
                </div>
                <div className="project" id="screw">
                  <img src={Screw} alt="screw icon" className="cou-icon" />
                  <p>Product Knowledge</p>
                </div>
                <div className="project" id="know">
                  <img src={People} alt="people icon" className="cou-icon" />
                  <p>Technical know-how</p>
                </div>
              </div>
            </div>

            {completed && (
              <div className="complete-date">
                <div className="completed">
                  <IoMdCheckmark className='mark' />
                  <p className="comp">Completed</p>
                </div>
                <p className="comp-date">20, October, 2024</p>
              </div>
            )}
          </div>
          <div className="add-icon">
            <img src={Add} alt="add icon" className="add" />
          </div>
        </div>
      ))}
    </div>
  )
}
