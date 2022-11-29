import React from "react"
import Descriptions from "./Description"
import FormLink from "./FormLink"
import ProfilePic from "./ProfilePic"
import Title from "./Title"

type Props = {}

const About = (props: Props) => {
  return (
    <div className="section about align-left" id="about-section">
      <div className="fw">
        <div className="row">
          <div className="col col-m-12 col-t-4 col-d-4">
            <div className="profile">
              <ProfilePic />
            </div>
          </div>
          <div className="col col-m-12 col-t-8 col-d-8">
            <div className="text-box">
              <Title />
              <Descriptions />
            </div>
            <div className="bts">
              <FormLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
