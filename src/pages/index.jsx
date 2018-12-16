import React from 'react'
import { Camera } from 'react-feather'
import banner from "../background.png"
import Link from 'gatsby-link'
import Eligibility from "../containers/eligibility"
import Instructions from "../containers/instructions"
import SelectionCriteria from "../containers/SelectionCriteria"
import Contact from "../containers/contact"

const IndexPage = () => (
  <div>
    <img src={banner} className="heroImage" />
    <Eligibility />
    <Instructions />
    <SelectionCriteria />
    <Contact />
  </div>
)

export default IndexPage
