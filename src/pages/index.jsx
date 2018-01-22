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
    <section>
      <p>BP Americas’s Wyoming operations are anchored in the south-central part of the state in the Wamsutter field, one of America’s premier reservoirs of tight gas. The company’s Lower 48 business is the field’s largest operator, with about 2,000 wells. An industry leader in innovation, BP drilled Wyoming's first multilateral well in Wamsutter in 2016; a technique that increases hydrocarbon recovery while reducing surface use.
</p>
      <p>As an integral member of the community, the BP and its Wyoming-based employees wish to give back by offering $5,000 college scholarships to residents of Wyoming pursuing STEM fields at the University of Wyoming. See eligibility for full details. </p>
    </section>
    <Instructions />
    <Eligibility />
    <SelectionCriteria />
    <Contact />
  </div>
)

export default IndexPage
