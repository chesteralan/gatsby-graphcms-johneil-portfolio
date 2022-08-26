import React from "react"
import ServiceItem from "./ServiceItem"
import { graphql, useStaticQuery } from "gatsby"
import type { IGatsbyImageData } from "gatsby-plugin-image"

type Props = {}

export type Service = {
  title: string
  description: string
  ionicon: string
  iconImage: IGatsbyImageData
}

const Services = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      allGraphCmsService {
        nodes {
          title
          description
          iconImage {
            gatsbyImageData(width: 100)
          }
        }
      }
    }
  `)

  const services = data.allGraphCmsService?.nodes

  return (
    <div className="section services gray align-left" id="services-section">
      <div className="fw">
        <div className="titles">
          <div className="title">What I Do</div>
        </div>
        <div className="row">
          {services.map((service: Service, index: number) => (
            <ServiceItem key={index.toString()} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
