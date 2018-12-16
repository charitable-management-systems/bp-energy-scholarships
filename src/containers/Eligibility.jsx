import React from 'react'

const name = "Eligibility"

const indent = {
  'margin-left': '40px'
}

const EligibilityPage = () => (
	<div>
		<a className="anchor" name={name} />
		<h3>{name}</h3>
		<section>
			To be considered for a BPX Energy Scholarship, you must meet all of the following criteria:
			<ul>
				<li>Must be majoring in a Science, Technology, Engineering or Mathematics (STEM) field of study with a preference given to students pursuing studies in areas of interest to the energy industry.</li>
				<li>A legal resident of the state of Wyoming, with a preference given to students from Carbon and Sweetwater Counties.</li>
				<li>A current high school senior planning to enroll full-time at the University of Wyoming, any Wyoming community college or the Colorado School of Mines in the fall of 2019.</li>
			</ul>
      <p><strong>OR,</strong></p>

      <p style={indent}>A first-year freshman currently enrolled as a full-time student at the University of Wyoming, any Wyoming community college or the Colorado School of Mines in the fall of 2019.</p>
		</section>
	</div>
)

export default EligibilityPage
