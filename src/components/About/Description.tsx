import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

type Props = {}

const Descriptions = (props: Props) => {

  const data = useStaticQuery(graphql`
    {
        graphCmsSettings(key: {eq: About_Description}) {
          value
        }
      }
    `);

    const About_Description = data.graphCmsSettings?.value || ""

  return (
    <p>{About_Description}</p>
  )
}

export default Descriptions