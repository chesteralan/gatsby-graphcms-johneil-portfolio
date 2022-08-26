import React from "react"
import { graphql, useStaticQuery } from "gatsby"

type Props = {}

const Title = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      graphCmsSettings(key: { eq: About_Title }) {
        value
      }
    }
  `)

  const About_Title = data.graphCmsSettings?.value || ""

  return <h1>{About_Title}</h1>
}

export default Title
