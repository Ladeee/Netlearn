import { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Align from '../../../../assets/align.png'
import Voice from '../../../../assets/voice.png'
import Help from '../../../../assets/help-circle.png'
import Person from '../../../../assets/person.png'
import Play from '../../../../assets/play.png'
import { DatePicker, DatePickerProps, Input } from 'antd'
import { IoIosArrowDown } from 'react-icons/io'
import { comments, options, optiontwo, videos } from './channel'
import './channel.scss'

export default function Channel() {
  const [pick, setPick] = useState('feedback')
  const [choice, setChoice] = useState(false)

  const HandlePick = (active: any) => {
    setPick(active)
  }

  const HandleChoice = () => {
    setChoice(!choice)
  }

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <div className="channel-container">
      <div className="ch-heading">
        <h2 className="ch-head">Feedback channel</h2>
        <div className="ch-btns">
          <div className="create">Create feedback channel</div>
          <div className="view">View channels</div>
        </div>
      </div>

      <div className="ch-all-wrap">
        {' '}
        <div className="ch-all">
          <p
            className={`${pick === 'feedback' ? 'colored-pick' : 'ch-num'}`}
            onClick={() => HandlePick('feedback')}
          >
            All feedback
          </p>
          <p
            className={`${pick === 'lattice' ? 'colored-pick' : 'ch-num'}`}
            onClick={() => HandlePick('lattice')}
          >
            Lattice
          </p>
          <p
            className={`${pick === 'cone' ? 'colored-pick' : 'ch-num'}`}
            onClick={() => HandlePick('cone')}
          >
            Channel 1
          </p>
          <p
            className={`${pick === 'ctwo' ? 'colored-pick' : 'ch-num'}`}
            onClick={() => HandlePick('ctwo')}
          >
            Channel 2
          </p>
          <p
            className={`${pick === 'cthree' ? 'colored-pick' : 'ch-num'}`}
            onClick={() => HandlePick('cthree')}
          >
            Channel 3
          </p>
        </div>
      </div>

      <div className="ch-details">
        <div className="commentary-wrap">
          <div className="commentary">
            <div className="skill-prog">
              <p className="s-p-text">Commentary</p>
              <img src={Help} alt="help icon" className="help" />
            </div>

            <div className="aud-text">
              <div
                className="av"
                id={`${!choice ? 'change-av' : ''}`}
                onClick={HandleChoice}
              >
                <img src={Align} alt="align icon" className="align-icon" />
                <p className="com-text">Text</p>
              </div>
              <div
                className="av"
                id={`${choice ? 'change-av' : ''}`}
                onClick={HandleChoice}
              >
                <img src={Voice} alt="audio icon" className="audio-icon" />
                <p className="com-text">Audio</p>
              </div>
            </div>
          </div>

          <div className="com">
            {!choice ? (
              <div className="comments-wrap">
                {comments.map((person) => (
                  <div className="commenters">
                    <div className="com-details">
                      <img src={Person} alt="person" className="person" />
                      <div className="name-occupation">
                        <div className="name">
                          {person.name}
                          <span className="dot" />
                          <span className="date">{person.date}</span>
                        </div>
                        <p className="occupation">{person.occupation}</p>
                      </div>
                    </div>
                    <p className="person-text">{person.text}</p>
                  </div>
                ))}
                <p className="see">See more commentary</p>
              </div>
            ) : (
              <div className="comments-wrap">
                {videos.map((person) => (
                  <div className="commenters">
                    <div className="com-details">
                      <img src={Play} alt="play" className="play" />
                      <div className="name-occupation">
                        <div className="name">
                          {person.name}
                          <span className="dot" />
                          <span className="date">{person.date}</span>
                        </div>
                        <p className="person-text">{person.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <p className="see">See more commentary</p>
              </div>
            )}
          </div>
        </div>

        <div className="progression-wrap">
          <div className="skill-prog" id="skill-prog">
            <p className="s-p-text">Skill progression</p>
            <img src={Help} alt="help icon" className="help" />
          </div>

          <div className="chart-box">
            <div className="p-overall">
              <div className="overall-img">
                <p className="overall-text">
                  Overall Progression by Skill Area
                </p>
                <img src={Help} alt="help icon" className="help" />
              </div>
              <div className="month">
                {' '}
                <DatePicker
                  onChange={onChange}
                  picker="month"
                  placeholder="This month"
                  suffixIcon={<IoIosArrowDown />}
                />
              </div>
            </div>
            <div className="expected">
              <div className="per">
                <div className="per-dot" />
                <p className="exp">Expected performance</p>
              </div>
              <div className="per">
                <div className="opa-dot" />
                <p className="exp">Actual performance</p>
              </div>
            </div>

            <div className="chart">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          </div>

          <div className="chart-box">
            <div className="p-overall">
              <div className="overall-img">
                <p className="overall-text">Detailed Skill Stack</p>
                <img src={Help} alt="help icon" className="help" />
              </div>
              <div className="skill-month">
                <div className="month">
                  {' '}
                  <Input
                    placeholder="All skill areas"
                    suffix={<IoIosArrowDown />}
                  />
                </div>
                <div className="month">
                  <DatePicker
                    onChange={onChange}
                    picker="month"
                    placeholder="This month"
                    suffixIcon={<IoIosArrowDown />}
                  />
                </div>
              </div>
            </div>

            <div className="expected">
              <div className="per">
                <div className="per-dot" />
                <p className="exp">Expected performance</p>
              </div>
              <div className="per">
                <div className="opa-dot" />
                <p className="exp">Actual performance</p>
              </div>
            </div>
            <div className="chart">
              <HighchartsReact highcharts={Highcharts} options={optiontwo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
