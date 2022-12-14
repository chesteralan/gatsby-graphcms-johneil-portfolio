import React from "react"
import { graphql, useStaticQuery } from "gatsby"

type Props = {}

type Social = {
  socialMedia: string
  url: string
}
const Socials = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      allGraphCmsSocialMediaLink {
        nodes {
          socialMedia
          url
        }
      }
    }
  `)

  const socials = data.allGraphCmsSocialMediaLink?.nodes

  return (
    <div className="socials">
      {socials.map(({ socialMedia, url }: Social, index: number) => (
        <a key={index.toString()} target="blank" href={url}>
          <i className={`icon ion ion-social-${socialMedia}`}></i>
        </a>
      ))}
    </div>
  )
}

export default Socials
