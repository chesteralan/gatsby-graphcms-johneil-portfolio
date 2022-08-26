import React from "react"
import { graphql, useStaticQuery } from "gatsby"

type Props = {}

const Logo = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      graphCmsSettings(key: { eq: DisplaySiteName }) {
        value
      }
    }
  `)

  const title = data.graphCmsSettings?.value || "Hendrix"

  return (
    <div className="logo">
      <a href="#hero-section">{title}</a>
    </div>
  )
}

export default Logo
