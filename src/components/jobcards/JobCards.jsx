import React from 'react'
import { Trans } from 'react-i18next';
import variables from '../../Variables.scss';
import "./JobCards.scss";

const JobCards = ({backColor, businessLogo, jobTitleKey}) => {
  return (
    <div style={{backgroundColor: backColor}} className={`job-card`}>
        <div style={{backgroundColor: variables.background}} className="job-card-logo">
            <img width={140} src={businessLogo} alt="business-logo"/>
        </div>
        <div className="job-card-title text-break fs-5"><Trans i18nKey={jobTitleKey} /></div>
    </div>
  )
}

export default JobCards