import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import TestimonialItems from "./TestimonialItems";
import type { IGatsbyImageData } from "gatsby-plugin-image"
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.css';

type Props = {}

export type Message = {
  html: any;
}

export type Testimonial = {
  name: string;
  company: string;
  testimonial: Message;
  image: IGatsbyImageData;
}

const Testimonials = (props: Props) => {

  const data = useStaticQuery(graphql`
	{
    allGraphCmsTestimonial {
      nodes {
        name
        company
        testimonial {
          html
        }
        image {
          gatsbyImageData(width: 100)
        }
      }
    }
  }  
  `);

  const testimonials = data.allGraphCmsTestimonial?.nodes

  return (
    <div className="section blog align-left gray" id="testimonials-section">
      <div className="fw">
        <div className="titles">
          <div className="title">Testimonials</div>
        </div>
        <div className="row box-items">
          <div className="col col-m-12 col-t-12 col-d-12 box-item f-mockups">
            <Carousel
            showStatus={false}
            swipeScrollTolerance={5}
            autoPlay={false}
            centerMode={false}
            dynamicHeight={false}
            emulateTouch={true}
            infiniteLoop={true}
            interval={3000}
            preventMovementUntilSwipeScrollTolerance={true}
            stopOnHover={false}
            swipeable={true}
            useKeyboardArrows={false}
            selectedItem={0}
            showArrows={false}
            showIndicators={true}
            showThumbs={true}
            ariaLabel={''}
            axis={'horizontal'}
            transitionTime={500}
            >
              {testimonials.map((testimonial:Testimonial,index:number) => (<TestimonialItems key={index.toString()} testimonial={testimonial} />))}
            </Carousel>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  )
}

export default Testimonials
