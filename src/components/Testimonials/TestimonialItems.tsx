import React from 'react'
import type { Testimonial } from './Testimonials'
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

import 'react-responsive-carousel/lib/styles/carousel.css';

type Props = {
    testimonial: Testimonial
}

const TestimonialItems = ({ testimonial }: Props) => {

    const {
        name,
        company,
        testimonial: message,
        image
    } = testimonial;

    const img = getImage(image) as IGatsbyImageData

  return (
    <div className="testimonial">
        <div dangerouslySetInnerHTML={{ __html: message.html }} />
        {name}<br />
        {company}<br />
        <GatsbyImage image={img} alt={name} className="image" />
    </div>

  )
}

export default TestimonialItems