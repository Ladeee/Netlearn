import Lat from '../../../../assets/lattice.png'
import Plug from '../../../../assets/plug.png'
import Feedback from '../../../../assets/feedback.png'
import Plans from '../../../../assets/plans.png'
import { Button, Checkbox } from 'antd'
import './lattice.scss'
import { Link } from 'react-router-dom'

export default function Lattice() {
  return (
    <div className="lattice-container">
      <div className="lat-logo-wrapper">
        <img src={Lat} alt="lattice icon" className="lattice-logo" />
      </div>

      <div className="connect-wrapper">
        <div className="connect">
          <img src={Plug} alt="plug icon" className="lat-icon" />
          <div className="connect-text">
            <p className="c-heading">Seamless Integration</p>
            <div className="c-text">
              Seamlessly link your Lattice account to Netlearn with just a few
              clicks.
            </div>
          </div>
        </div>

        <div className="connect">
          <img src={Feedback} alt="feedback icon" className="lat-icon" />
          <div className="connect-text">
            <p className="c-heading">Automated Feedback Sync</p>
            <div className="c-text">
              Your latest feedback from Lattice will be automatically synced to
              your Netlearn <br />
              dashboard.
            </div>
          </div>
        </div>

        <div className="connect" id="connect-hr">
          <img src={Plans} alt="plans icon" className="lat-icon" />
          <div className="connect-text">
            <p className="c-heading">Personalized Learning Plans</p>
            <div className="c-text">
              Netlearn will use your feedback to create tailored learning plans,
              highlighting <br />
              areas for improvement and suggesting relevant courses and
              resources.
            </div>
          </div>
        </div>
      </div>

      <div className="lat-checkbox">
        <Checkbox className="checkbox" />
        <p className="lat-check-text">
          By checking this box, I authorize Netlearn to securely access my
          company's Lattice <br />
          data to enhance learning recommendations in accordance with Netlearn's{' '}
          <span>
            Terms & <br />
            Conditions
          </span>
        </p>
      </div>

      <Link to="/welcome" className="link">
        <div className="lat-btn-wrapper">
          <Button className="lat-btn">Allow Access</Button>
        </div>
      </Link>
      <p className="later">Connect later</p>
    </div>
  )
}
