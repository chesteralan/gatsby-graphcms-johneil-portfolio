import React from "react"
import Socials from "./Socials"
import Typed from './Typed'
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby";

type Props = {}

const Hero = (props: Props) => {

  const data = useStaticQuery(graphql`
  {
      graphCmsSettings(key: {eq: Hero_Background_Image}) {
        image {
          url
        }
      }
    }
  `);

  const Hero_Background_Image = data.graphCmsSettings?.image?.url
  
  return (
    
      <div className="section started">
        <div
          className="slide"
          style={{backgroundImage: `url(${Hero_Background_Image})`}}
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
