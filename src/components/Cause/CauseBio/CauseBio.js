import React from 'react'
import CauseBioDetail from './CauseBioDetail'
import CauseCarousel from './CauseCarousel'

const CauseBio = props => {
  const content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <React.Fragment>
      <CauseCarousel />
      <div className="cause-bio-wrapper">
        <CauseBioDetail
          heading="About the Cause"
          content={content}
          {...props}
        />
        <CauseBioDetail heading="About the Charity" content={content} />
      </div>
    </React.Fragment>
  )
}

export default CauseBio
