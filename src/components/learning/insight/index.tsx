import { useState } from 'react'
import Help from '../../../assets/help-circle.png'
import Filter from '../../../assets/filter.png'
import Play from '../../../assets/play.png'
import Pause from '../../../assets/pause.png'
import Likes from '../../../assets/thumb.png'
import Add from '../../../assets/add.png'
import Music from '../../../assets/music.png'
import Blue from '../../../assets/blue-audio.png'
import Skill from '../../../assets/skill.png'
import Avatar from '../../../assets/person.png'
import Shuffle from '../../../assets/shuffle.png'
import { Button, Dropdown, MenuProps } from 'antd'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { insight } from './insight'
import './insight.scss'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Skill One',
  },
]

export default function Insight() {
  const [lessons, setLessons] = useState('lessons')
  const [drop, setDrop] = useState<{ [key: string]: boolean }>({})
  const [play, setPlay] = useState<{ [key: string]: boolean }>({})

  const HandleLessons = (active: string) => {
    setLessons(active)
  }

  const HandleDrop = (id: number) => {
    setDrop((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  const HandlePlay = (id: number) => {
    setPlay((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  return (
    <div className="insight-container">
      <div className="explore">
        <div className="exp">
          <h2 className="exp-heading">Explore Insights</h2>
          <p className="exp-text">
            Explore a curated selection of voice insights from experienced peers
            and experts, based on your <br /> focus skills.
          </p>
        </div>
        <div className="exp-choices">
          <p
            className={`${lessons === 'lessons' && 'play-choice'}`}
            onClick={() => HandleLessons('lessons')}
          >
            Browse All
          </p>
          <p
            className={`${lessons === 'playlists' && 'play-choice'}`}
            onClick={() => HandleLessons('playlists')}
          >
            Played
          </p>
          <p
            className={`${lessons === 'watch' && 'play-choice'}`}
            onClick={() => HandleLessons('watch')}
          >
            Listen Later
          </p>
        </div>
      </div>

      <div className="insight-wrapper">
        <div className="recommended">
          <div>
            <h1 className="rec">Learn from experienced pros</h1>
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

            <div></div>
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

        <div className="play-shuffle">
          <div className="play-all">
            <img src={Play} alt="play" className="playall-icon" />
            <p>Play all</p>
          </div>
          <div className="play-all">
            <img src={Shuffle} alt="shuffle" className="shuffle-icon" />
            <p>Shuffle</p>
          </div>
        </div>

        <div className="insights">
          {insight.map((info) => (
            <div className="insight-display" key={info.id}>
              <div className="about-insight">
                <div onClick={() => HandlePlay(info.id)}>
                  {play[info.id] ? (
                    <img src={Pause} alt="pause" className="pause" />
                  ) : (
                    <img src={Play} alt="pause" className="pause" />
                  )}
                </div>
                <div className="insight-info">
                  <div className="person">
                    <img src={Avatar} alt="avatar" className="avatar" />
                    <div className="name-occ">
                      <p className="name">{info.name}</p>
                      <p className="occ">{info.occupation}</p>
                    </div>
                    <div className="dot" />
                    <p className="date">{info.date}</p>
                  </div>

                  <h2 className="title">{info.title}</h2>
                  <div className="focus">
                    <p className="focus-text">Focus skill area: </p>
                    <div className="projects">
                      <div className="skill" id="plan">
                        <img src={Skill} alt="skill" className="skill" />
                        <p>Project planning</p>
                      </div>
                      <div className="skill" id="plan">
                        <img src={Skill} alt="skill" className="skill" />
                        <p>Project planning</p>
                      </div>
                      <div className="skill" id="tech">
                        <img src={Skill} alt="skill" className="skill" />
                        <p>Technical know-how</p>
                      </div>
                    </div>
                  </div>

                  <div className="resource">
                    <div className="res">
                      <div
                        className="arrow"
                        onClick={() => HandleDrop(info.id)}
                      >
                        {drop[info.id] ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                      <div>
                        <p className="res-text">
                          Recommended Learning Resources
                        </p>
                        {drop[info.id] ? (
                          <div>
                            <div className="res-link">
                              {info.about} (<span>link</span>)
                            </div>
                            <div className="res-link">
                              {info.about} (<span>link</span>)
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="likes">
                <div className="like-number">
                  <img src={Likes} alt="like" className="like-icon" />
                  <p>{info.likes}</p>
                </div>
                <img src={Add} alt="add" className="add" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="music-display">
        <div className="about-avatar">
          <div className="avatar-audio">
            <img src={Avatar} alt="avatar" className="m-avatar" />
            <img src={Blue} alt="blue audio" className="blue-audio" />
          </div>
          <div className="column">
            <p className="mus-text">
              Kicking off a project the right way. Kicking off a project the
              right way
            </p>
            <div className="m-n-o">
              <p className="m-name">Lucy Thindle</p>
              <p className="m-occ">[Finance manager]</p>
            </div>
          </div>
        </div>
        <img src={Music} alt="play music" className="music" />
      </div>
    </div>
  )
}
