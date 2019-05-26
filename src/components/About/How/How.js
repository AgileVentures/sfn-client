import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandsHelping,
  faMicrophoneAlt,
  faTheaterMasks,
  faPaw
} from '@fortawesome/free-solid-svg-icons'

const How = () => {
  return (
    <div className="how-container">
      <h3 className="white">How it works?</h3>
      <div className="how-process-wrapper">
        <div className="how-process-item white">
          <FontAwesomeIcon className="icon" icon={faPaw} />
          <h5>Causes</h5>
          <p>
            Lorem ipsum dolor amet neutra cornhole keffiyeh vegan waistcoat pork
            belly fanny pack iceland vinyl marfa. Vegan ad slow-carb
            single-origin coffee, est shoreditch try-hard. Esse edison bulb DIY
            unicorn.
          </p>
        </div>
        <div className="how-process-item white">
          <FontAwesomeIcon className="icon" icon={faMicrophoneAlt} />
          <h5>Artists</h5>
          <p>
            Lorem ipsum dolor amet neutra cornhole keffiyeh vegan waistcoat pork
            belly fanny pack iceland vinyl marfa. Vegan ad slow-carb
            single-origin coffee, est shoreditch try-hard. Esse edison bulb DIY
            unicorn.
          </p>
        </div>
        <div className="how-process-item white">
          <FontAwesomeIcon className="icon" icon={faTheaterMasks} />
          <h5>Performance</h5>
          <p>
            Lorem ipsum dolor amet neutra cornhole keffiyeh vegan waistcoat pork
            belly fanny pack iceland vinyl marfa. Vegan ad slow-carb
            single-origin coffee, est shoreditch try-hard. Esse edison bulb DIY
            unicorn.
          </p>
        </div>
        <div className="how-process-item white">
          <FontAwesomeIcon className="icon" icon={faHandsHelping} />
          <h5>Donate</h5>
          <p>
            Lorem ipsum dolor amet neutra cornhole keffiyeh vegan waistcoat pork
            belly fanny pack iceland vinyl marfa. Vegan ad slow-carb
            single-origin coffee, est shoreditch try-hard. Esse edison bulb DIY
            unicorn.
          </p>
        </div>
      </div>
    </div>
  )
}

export default How
