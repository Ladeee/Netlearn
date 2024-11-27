import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Help from '../../../assets/help-circle.png'
import Vid from '../../../assets/video.png'
import Play from '../../../assets/play.png'
import Like from '../../../assets/thumb.png'
// import Fire from '../../../assets/fire.png'
import Bar from '../../../assets/bar.png'
import Add from '../../../assets/add.png'
// import Trend from '../../../assets/trend.png'
import Avatar from '../../../assets/person.png'
import { courses, options, personInfo, pie } from './learn'
// import { Button, Dropdown, MenuProps } from 'antd'
// import { IoIosArrowDown } from 'react-icons/io'
import './learn.scss'

// const items: MenuProps['items'] = [
//   {
//     key: '1',
//     label: 'Skill One',
//   },
// ]

export default function Learn() {
  return (
    <div className="learn-container">
      <div className="charts">
        <div className="bar-charts">

          <div className="high-bar">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
        <div className="pie-charts">
          <HighchartsReact highcharts={Highcharts} options={pie} />
          <div className="pie-course">
            <h1 className="five">25</h1>
            <p className="course">Courses</p>
          </div>

          <div className="assigned">
            <div className="completed"></div>
          </div>
        </div>
      </div>

      <div className="trending-courses">
        <div className="tc-box">
          <div className="tc-heading">
            <p>Trending Insights</p>
            <img src={Help} alt="help circle" className="t-help" />
          </div>

          <div className="person-info-wrapper">
            {personInfo.map((info) => (
              <div className="person-project">
                <div className="about-img">
                  <img src={Play} alt="grey play icon" className="play" />

                  <div className="avatar-trends">
                    <div className="about-avatar">
                      <img src={Avatar} alt="avatar" className="avatar" />
                      <div className="name-job">
                        <p className="name">{info.name}</p>
                        <p className="job">{info.occupation}</p>
                      </div>
                      <div className="dot" />
                      <p className="date">{info.date}</p>
                    </div>
                    <p className="t-text">{info.text}</p>
                  </div>
                </div>

                <div className="likes-add">
                  <div className="like-number">
                    <img src={Like} alt="like" className="like" />
                    <p className="number">{info.likes}</p>
                  </div>
                  <img src={Add} alt="add" className="add" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tc-box">
          <div className="tc-heading">
            <p>Courses In Progress</p>
            <img src={Help} alt="help circle" className="t-help" />
          </div>

          <div className="course-wrapper">
            {courses.map((course) => (
              <div className="courses">
                <img src={Vid} alt="video" className="video" />
                <div className="about-course">
                  <p className="title">{course.title}</p>
                  <p className="author">{course.author}</p>
                  <div className="skill">
                    {course.skill} <span className="area">{course.area}</span>
                  </div>
                  <img src={Bar} alt="bar" className="bar" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
