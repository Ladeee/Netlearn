import { useState } from 'react'
import './learning.scss'
import Courses from './courses'
import Insight from './insight'

export default function Learning() {
  const [course, setCourse] = useState('course')

  const HandleCourse = (active: string) => {
    setCourse(active)
  }

  return (
    <div className="learning-container">
      <div className="cour-ins">
        <p
          className={`${course === 'course' && 'cour-ins-border'}`}
          onClick={() => HandleCourse('course')}
        >
          Courses
        </p>
        <p
          className={`${course === 'insight' && 'cour-ins-border'}`}
          onClick={() => HandleCourse('insight')}
        >
          Insights
        </p>
      </div>

      <div>{course === 'course' ? <Courses /> : <Insight />}</div>
    </div>
  )
}
