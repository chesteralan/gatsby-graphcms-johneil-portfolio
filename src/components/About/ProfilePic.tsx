import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

type Props = {}

const ProfilePic = (props: Props) => {

    const data = useStaticQuery(graphql`
    {
        graphCmsSettings(key: {eq: About_Description}) {
          value
        }
      }
    `);

    const About_Description = data.graphCmsSettings?.value || ""
    
  return (
    <img src="images/profile.jpeg" alt="" />
  )
}

export default ProfilePic