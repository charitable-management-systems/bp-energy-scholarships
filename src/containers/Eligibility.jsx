import React from 'react'

const name = "Eligibility"

const EligibilityPage = () => (
    <div>
        <a className="anchor" name={name} />
        <h3>{name}</h3>
        <section>
            <p>To be considered for a BP America Production Company (Lower 48) Energy Scholarship, you must meet all of the following criteria:</p>
            <ul>
                <li>A legal resident of the state of Wyoming, with a preference given to students from Carbon and Sweetwater Counties.</li>
                <li>A current high school senior planning to enroll full-time at the University of Wyoming in the fall of 2018.  Or, a first-year freshmen currently enrolled as a full-time student at the University of Wyoming.<sup>*</sup></li>
                <li>Must be majoring in a Science, Technology, Engineering or Mathematics (STEM) field of study with a preference given to students pursing studies in areas of interest to the energy industry.</li>
            </ul>

            <p><sup>*</sup><span style={{"font-size": "11px"}}>The program administrators reserve the right to define a first-year freshmen.  Generally, this will be viewed as students in their first year of    attendance at the University of Wyoming in the fall term immediately following high school graduation.  Or, students entering the University of Wyoming not immediately following high school graduation, but with fewer than 24 college credit hours earned after high school graduation.</span>
</p>
        </section>
    </div>
)

export default EligibilityPage