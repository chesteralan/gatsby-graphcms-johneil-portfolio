import React from "react"
import { graphql, useStaticQuery } from "gatsby"

type Props = {
  dark?: boolean
}

type Social = {
  socialMedia: string
  url: string
  icon: any
  iconDark: any
}
const Socials = ({ dark = false }: Props) => {
  const data = useStaticQuery(graphql`
    {
      allGraphCmsSocialMediaLink {
        nodes {
          socialMedia
          url
          icon {
            url
          }
          iconDark {
            url
          }
        }
      }
    }
  `)

  const socials = data.allGraphCmsSocialMediaLink?.nodes

  return (
    <div className="socials">
      {socials.map(
        ({ socialMedia, url, icon, iconDark }: Social, index: number) => {
          return (
            <a
              title={socialMedia}
              key={index.toString()}
              target="blank"
              href={url}
            >
              <i
                className={`icon`}
                style={{
                  backgroundImage: `url(${dark ? iconDark?.url : icon?.url})`,
                }}
              ></i>
            </a>
          )
        }
      )}
    </div>
  )
}

export default Socials
