import React from "react"
import type { Service } from "./Services"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

type Props = {
  service: Service
}

const ServiceItem = ({ service }: Props) => {
  const { title, description, iconImage } = service
  const image = getImage(iconImage) as IGatsbyImageData
  return (
    <div className="col col-m-12 col-t-6 col-d-4">
      <div className="service-item">
        <div className="circle">
          {image && (
            <GatsbyImage image={image} alt={title} className="icon-image" />
          )}
        </div>
        <div className="name">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServiceItem
