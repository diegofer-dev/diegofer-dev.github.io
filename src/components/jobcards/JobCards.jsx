import React from 'react'
import "./JobCards.scss";

const JobCards = ({backColor, businessLogo, jobTitle}) => {
  return (
    <div className={`job-card`}>
        <div className="job-card-logo">
            <img width={140} src={businessLogo} alt="business-logo"/>
        </div>
        <div style={{backgroundColor: backColor}} className="job-card-title text-break fs-5">{ jobTitle }</div>
    </div>
  )
}

export default JobCards