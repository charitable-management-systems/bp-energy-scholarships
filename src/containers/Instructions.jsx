import React from 'react'

const name = "Instructions"

const Instructions = () => (
    <div>
        <a className="anchor" name={name} />
        <h3>{name}</h3>
        <section>
            <p>All applications must be submitted by March 30, 2018</p>
            <p>All applicants must submit an official high school transcript.  College freshmen currently enrolled at the University of Wyoming must also submit an official college transcript.</p>    
            <p>Applicants will be required to upload a 500 – 750 word personal statement addressing all of the following questions:</p>
            <ul>
                <li>What have been the most important education experiences to-date that have prepared you for continued success in college?</li>
                <li>What has motivated you to major in a STEM field?</li>
                <li>How do you intend to apply your education within the energy industry upon your college graduation?</li>
                <li>Why should you be considered for a BP America Production Company (Lower 48) Energy Scholarship?</li>
            </ul>
            <p>Applicants must also submit an official high school transcript.</p>
            <p>Applicants must submit a copy of their Student Aid Report (SAR) including the Expected Family Contribution (EFC) from the information provided on their Free Application for Federal Student Aid (FAFSA).</p>
        </section>
    </div>
)

export default Instructions