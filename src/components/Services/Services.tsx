import React from 'react'
import ServiceItem from './ServiceItem'
import { graphql, useStaticQuery } from "gatsby";

type Props = {}

export type Service = {
	title: string;
	description: string;
	ionicon: string;
}

const Services = (props: Props) => {

	const data = useStaticQuery(graphql`
	{
		allGraphCmsService {
		  nodes {
			title
			ionicon
			description
		  }
		}
	  }	  
  `);

  const services = data.allGraphCmsService?.nodes

  return (
    <div className="section services gray align-left" id="services-section">
				<div className="fw">
					<div className="titles">
						<div className="title">What I Do</div>
					</div>
					<div className="row">
						{services.map((service:Service,index:number) => (<ServiceItem key={index.toString()} service={service} />))}
					</div>
				</div>
			</div>

  )
}

export default Services