import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src={props.logourl} alt="company logo" />
          <button>Save <Bookmark size={12}/></button>

        </div>
        <div className="center">
          <h3>{props.companyname} <span>5 Days Ago </span></h3>
          <h2>{props.jobtitle}</h2>
          <div>
            <h4>{props.jobtype}</h4>
            <h4>{props.joblevel}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
              <h3>{props.salary}</h3>
              <p>{props.location}</p>
          </div>
            <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Card
