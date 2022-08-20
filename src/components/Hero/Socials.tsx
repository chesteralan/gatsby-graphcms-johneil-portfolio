import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

type Props = {}

type Social = {
  socialMedia: string;
  url: string;
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
    `);

    const socials = data.allGraphCmsSocialMediaLink?.nodes;

    const icons = (s:string) : string => {
      switch(s) {
        case 'facebook':
          return 'ion ion-social-facebook';
        case 'github':
          return 'ion ion-social-github';
        case 'twitter':
          return 'ion ion-social-twitter';
        case 'youtube':
          return 'ion ion-social-youtube';
        case 'googleplus':
          return 'ion ion-social-googleplus';
        default:
          return ""
      }
    }

  return (
    <div className="socials">
      {socials.map(({ socialMedia, url }:Social,index:number) => (<a key={index.toString()} target="blank" href={url}>
                <i className={`icon ${icons(socialMedia)}`}></i>
              </a>))}
            </div>
  )
}

export default Socials