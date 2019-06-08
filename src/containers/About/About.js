import React from 'react'
import Vision from '../../components/About/Vision/Vision'
import Why from '../../components/About/Why/Why'
import How from '../../components/About/How/How'
import Banner from '../../components/Shared/Banner/Banner'

const About = () => {
  return (
    <div className="about-container">
      <Vision />
      <Why />
      <How />
      <Banner
        headline="This is a headline"
        benefits="This is a paragraph to explain some benefits of signing up"
        buttonLabel="Sign up"
      />
    </div>
  )
}

export default About
