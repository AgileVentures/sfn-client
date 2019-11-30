import React from 'react'
import ExploreCausesCategory from './ExploreCausesCategory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPaw,
  faChild,
  faWheelchair,
  faHandsHelping,
  faLeaf,
  faMedkit,
  faBook,
  faFemale,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons'

let categoriesData = [
  { id: 1, icon: faPaw, label: 'Animal welfare' },
  { id: 2, icon: faChild, label: 'Children' },
  { id: 3, icon: faWheelchair, label: 'Disability' },
  { id: 4, icon: faHandsHelping, label: 'Humanitarian' },
  { id: 5, icon: faLeaf, label: 'Environment' },
  { id: 6, icon: faMedkit, label: 'Health' },
  { id: 7, icon: faBook, label: 'Education' },
  { id: 8, icon: faFemale, label: 'Women' }
]

const ExploreCauses = () => {
  const renderedList = categoriesData.map(categoryData => {
    return (
      <ExploreCausesCategory
        key={categoryData.id}
        icon={categoryData.icon}
        label={categoryData.label}
      />
    )
  })

  return (
    <div className="explore-causes-container">
      <h3 className="explore-causes-title white">Explore these causes</h3>
      <div className="explore-causes-categories">{renderedList}</div>
      <div className="carousel-arrow">
        <FontAwesomeIcon className="arrow-icon" icon={faAngleDoubleRight} />
      </div>
    </div>
  )
}

export default ExploreCauses
