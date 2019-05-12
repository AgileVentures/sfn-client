import React from 'react'
import CauseBioDetail from './CauseBioDetail'

const CauseBio = () => {
  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <div>
      <CauseBioDetail heading="About the Cause" content={content} />
      <CauseBioDetail heading="About the Charity" content={content} />
    </div>
  )
}

export default CauseBio
