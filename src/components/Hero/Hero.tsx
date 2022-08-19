import React from "react"
import Socials from "./Socials"
import Typed from './Typed'
type Props = {}

const Hero = (props: Props) => {
  return (
    
      <div className="section started">
        <div
          className="slide"
          style={{backgroundImage: "url(images/slide-bg-1.jpeg)"}}
        ></div>
        <div className="centrize full-width">
          <div className="vertical-center">
            <Typed />
            <Socials />
          </div>
        </div>
        <a href="#about-section" className="mouse-btn">
          <i className="icon ion ion-chevron-down"></i>
        </a>
      </div>
    
  )
}

export default Hero
