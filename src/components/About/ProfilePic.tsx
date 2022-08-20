import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

type Props = {}

const ProfilePic = (props: Props) => {

    const data = useStaticQuery(graphql`
    {
        graphCmsSettings(key: {eq: About_Picture}) {
          value
          image {
            gatsbyImageData(width: 360)
          }
        }
      }
    `);

    const image = getImage(data.graphCmsSettings?.image) as IGatsbyImageData
    const altText = data.graphCmsSettings.value
    
  return (
    <GatsbyImage image={image} alt={altText} />
  )
}

export default ProfilePic