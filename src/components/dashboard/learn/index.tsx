import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './learn.scss'
import { options, pie } from './learn'

export default function Learn() {
  return (
    <div className="learn-container">
      <div className="charts">
        <div className="bar-charts">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="pie-charts">
          <HighchartsReact highcharts={Highcharts} options={pie} />
          <div className="pie-course">
           <h1 className='five'>25</h1>
           <p className="course">Courses</p>
          </div>

          <div className="assigned">
            <div className="completed"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
