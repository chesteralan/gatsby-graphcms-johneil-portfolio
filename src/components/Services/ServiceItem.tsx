import React from 'react'
import type { Service } from './Services'

type Props = {
    service: Service;
}

const ServiceItem = ({ service }: Props) => {
    const { title, description, ionicon } = service;
  return (
    <div className="col col-m-12 col-t-6 col-d-4">
							<div className="service-item">
								<div className="circle"><i className={`icon ion ${ionicon}`}></i></div>
								<div className="name">{title}</div>
								<p>{description}</p>
							</div>
						</div>
  )
}

export default ServiceItem