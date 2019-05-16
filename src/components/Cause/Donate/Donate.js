import React from 'react'
import DonateBlock from './DonateBlock'

const Donate = () => {
  return (
    <div className="donation-wrapper white">
      <h5>How your donation makes a difference</h5>
      <div className="donation-blocks">
        <DonateBlock
          donationAmount={10}
          rewardText="Some limited amount reward you don't want miss."
        />
        <DonateBlock
          donationAmount={20}
          rewardText="Some limited amount reward you don't want miss."
        />
        <DonateBlock
          donationAmount={50}
          rewardText="Some limited amount reward you don't want miss."
        />

        <DonateBlock rewardText="Some limited amount reward you don't want miss." />
      </div>
    </div>
  )
}

export default Donate
