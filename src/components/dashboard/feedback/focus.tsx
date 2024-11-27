import { useState } from 'react'
import { Button } from 'antd'
import Help from '../../../assets/help-circle.png'
import White from '../../../assets/white-help.png'
import Product from '../../../assets/product.png'
import Rate from '../../../assets/rate.png'
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdSquareOutline,
} from 'react-icons/io'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { GoPlus } from 'react-icons/go'
import './feedback.scss'

export const lean = [
  {
    id: 'one',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
  {
    id: 'two',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
  {
    id: 'three',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
  {
    id: 'four',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
  {
    id: 'five',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
]

export const develop = [
  {
    id: 'one',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
  {
    id: 'two',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
  {
    id: 'three',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
]

export const explore = [
  {
    id: 'one',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
  {
    id: 'two',
    text: 'Product knowledge',
    description:
      'You have developed your product knowledge to better understand customer needs and offer more informed solutions during sales pitches.',
  },
]

const Focus = () => {
  const [productArrow, setProductArrow] = useState('one')
  const [developArrow, setDevelopArrow] = useState('')
  const [exploreArrow, setExploreArrow] = useState('')

  const HandleProductArrow = (active: string) => {
    setProductArrow((prev) => (prev === active ? '' : active))
  }

  const HandleDevelopArrow = (active: string) => {
    setDevelopArrow((prev) => (prev === active ? '' : active))
  }

  const HandleExploreArrow = (active: string) => {
    setExploreArrow((prev) => (prev === active ? '' : active))
  }

  return (
    <div className="focus-container">
      <div className="focus-head">
        <div className="f-help">
          <p className="f-heading">My Focus Skills</p>
          <img src={Help} alt="help icon" className="help-circle" />
        </div>
        <Button className="f-connect-btn">Connected to Lattice</Button>
      </div>

      <div className="f-boxes">
        <div className="f-box">
          <div className="b-colored" id="lean">
            <p className="fb-name">"Lean in"</p>
            <p className="l-num">5</p>
            <img src={White} alt="white help icon" className="white" />
          </div>

          {lean.map((item) => (
            <div className="functional" key={item.id}>
              <div
                className="f-icon"
                onClick={() => HandleProductArrow(item.id)}
              >
                {productArrow === item.id ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowForward />
                )}
              </div>
              <div className="p-k-func">
                <div className="p-know">
                  <img src={Product} alt="" className="product-icon" />
                  <p className="p-k-text">{item.text}</p>
                  <div className="p-func">Functional</div>
                </div>
                {productArrow === item.id && (
                  <p className="p-box-text">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="f-box">
          <div className="b-colored" id="develop">
            <p className="fb-name">"Develop"</p>
            <p className="d-num">3/5</p>
            <img src={White} alt="white help icon" className="white" />
          </div>

          {develop.map((item) => (
            <div className="functional" key={item.id}>
              <div
                className="f-icon"
                onClick={() => HandleDevelopArrow(item.id)}
              >
                {developArrow === item.id ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowForward />
                )}
              </div>
              <div className="p-k-func">
                <div className="p-know">
                  <img src={Rate} alt="" className="rate-icon" />
                  <p className="p-k-text">{item.text}</p>
                  <div className="p-func">Functional</div>
                </div>
                {developArrow === item.id && (
                  <p className="p-box-text">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="f-box">
          <div className="b-colored" id="explore">
            <p className="fb-name">"Explore"</p>
            <p className="e-num">2/5</p>
            <img src={White} alt="white help icon" className="white" />
          </div>

          {explore.map((item) => (
            <div className="explore-display">
              <div className="functional" key={item.id}>
                <div
                  className="f-icon"
                  onClick={() => HandleExploreArrow(item.id)}
                >
                  {exploreArrow === item.id ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </div>

                <div className="p-k-func">
                  <div className="p-know">
                    <IoMdSquareOutline className="square-icon" />
                    <p className="p-k-text">{item.text}</p>
                    <div className="p-func">Functional</div>
                  </div>
                  {exploreArrow === item.id && (
                    <p className="p-box-text">{item.description}</p>
                  )}
                </div>
              </div>

              <div>
                <HiOutlineDotsHorizontal className="explore-menu" />
              </div>
            </div>
          ))}
          <div className="new-skill">
            <GoPlus className="ex-plus" />
            <p className="add">Add new skill to explore</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Focus
