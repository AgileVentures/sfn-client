import React from 'react'
import PerformanceCarousel from './PerformanceCarousel'
import PerformanceBioDetail from './PerformanceBioDetail'

const PerformanceBio = () => {
  const content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <React.Fragment>
      <PerformanceCarousel />
      <div className="performance-bio-detail-wrapper">
        <PerformanceBioDetail
          heading="About the Performance"
          content={content}
        />
        <PerformanceBioDetail heading="About the Artist" content={content} />
      </div>
    </React.Fragment>
  )
}

export default PerformanceBio
