import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExploreCausesCategory = props => {
  return (
    <div className="explore-causes-category">
      <FontAwesomeIcon
        className="related-cause__icon white cause-category-icon"
        icon={props.icon}
      />
      <p className="white label-normal">{props.label}</p>
    </div>
  )
}

ExploreCausesCategory.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string
}

export default ExploreCausesCategory
