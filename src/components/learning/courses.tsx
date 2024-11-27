import { useState } from 'react'
import { Button, Dropdown, MenuProps } from 'antd'
import { IoIosArrowDown } from 'react-icons/io'
import Help from '../../assets/help-circle.png'
import Filter from '../../assets/filter.png'
import Progress from './all-lessons/progress/progress'
import Lessons from './all-lessons/lesson/lesson'
import './learning.scss'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Skill One',
  },
]

export default function Courses() {
  const [choose, setChoose] = useState('all')
  const [lessons, setLessons] = useState('lessons')
  const [completed, setCompleted] = useState(false)

  const HandleChoice = (active: string) => {
    setChoose(active)

    if (active === 'completed') {
      setCompleted(true)
    } else {
      setCompleted(false)
    }
  }

  const HandleLessons = (active: string) => {
    setLessons(active)
  }

  return (
    <div className="course-container">
      <div className="explore">
        <div className="exp">
          <h2 className="exp-heading">Explore Courses</h2>
          <p className="exp-text">
            Explore a curated selection of courses tailored to your learning
            needs.
          </p>
        </div>
        <div className="exp-choices">
          <p
            className={`${lessons === 'lessons' && 'play-choice'}`}
            onClick={() => HandleLessons('lessons')}
          >
            Lessons
          </p>
          <p
            className={`${lessons === 'playlists' && 'play-choice'}`}
            onClick={() => HandleLessons('playlists')}
          >
            Playlists
          </p>
          <p
            className={`${lessons === 'watch' && 'play-choice'}`}
            onClick={() => HandleLessons('watch')}
          >
            Watch Later
          </p>
        </div>
      </div>

      <div className="exp-wrapper">
        <div className="recommended">
          <h1 className="rec">Recommended lessons for you</h1>
          <div className="rec-display">
            <div className="dot-text">
              <div className="dot" id="lean" />
              <p>Lean in</p>
            </div>
            <div className="dot-text">
              <div className="dot" id="develop" />
              <p>Develop</p>
            </div>
            <div className="dot-text">
              <div className="dot" id="explore" />
              <p>Explore</p>
            </div>
            <div className="dot-text">
              <div className="dot" id="others" />
              <p>Others</p>
            </div>
            <img src={Help} alt="help" className="help" />
          </div>
        </div>

        <div className="all-lessons">
          <div className="track">
            <p
              className={`${choose === 'all' && 'choice'}`}
              onClick={() => HandleChoice('all')}
            >
              All Lessons
            </p>
            <p
              className={`${choose === 'progress' && 'choice'}`}
              onClick={() => HandleChoice('progress')}
            >
              In Progress
            </p>
            <p
              className={`${choose === 'completed' && 'choice'}`}
              onClick={() => HandleChoice('completed')}
            >
              Completed
            </p>
          </div>

          <div className="options">
            <Dropdown menu={{ items }} placement="bottom">
              <Button>
                All focus skills
                <div className="arrow">
                  <IoIosArrowDown />{' '}
                </div>
              </Button>
            </Dropdown>
            <Dropdown menu={{ items }} placement="bottom">
              <Button>
                All skills areas{' '}
                <div className="arrow">
                  <IoIosArrowDown />{' '}
                </div>
              </Button>
            </Dropdown>
            <Dropdown menu={{ items }} placement="bottom">
              <Button>
                Duration{' '}
                <div className="arrow">
                  <IoIosArrowDown />{' '}
                </div>
              </Button>
            </Dropdown>
            <Dropdown menu={{ items }} placement="bottom">
              <Button>
                <img src={Filter} alt="filter" className="filter" />
                All filters
              </Button>
            </Dropdown>
          </div>
        </div>

        <div className="learning-boxes">
          {choose === 'all' && <Lessons />}
          {choose === 'progress' && <Progress />}
          {(choose === 'lessons' || choose === 'completed') && (
            <Lessons completed={completed} />
          )}
        </div>
      </div>
    </div>
  )
}
