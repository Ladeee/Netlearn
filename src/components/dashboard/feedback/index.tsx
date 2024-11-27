import Channel from "./channel"
import "./feedback.scss"
import Focus from "./focus"

export default function Feedback() {
  return (
    <div className='feedback-container'>
      <Focus />
      <Channel />
    </div>
  )
}
