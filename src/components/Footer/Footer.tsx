import React from "react"
import Socials from "../Hero/Socials"
import { graphql, useStaticQuery } from "gatsby"

type Props = {}

const Footer = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      graphCmsSettings(key: { eq: DisplaySiteName }) {
        value
      }
    }
  `)

  const title = data.graphCmsSettings?.value || "Hendrix"

  const currentYear = new Date().getFullYear()

  return (
    <footer className="align-center">
      <Socials />
      <div className="copy">
        &copy; {currentYear} {title}. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
