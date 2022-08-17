import React from "react"

type Props = {}

const Hero = (props: Props) => {
  return (
    
      <div className="section started">
        <div
          className="slide"
          style={{backgroundImage: "url(images/slide-bg-1.jpeg)"}}
        ></div>
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="st-title align-center">
              <div className="typing-title">
                <p>Developer</p>
                <p>Photographer</p>
                <p>Coder</p>
                <p>Blogger</p>
                <p>Freelancer</p>
              </div>
              <span className="typed-title"></span>
            </div>
            <div className="socials">
              <a target="blank" href="https://www.facebook.com">
                <i className="icon ion ion-social-facebook"></i>
              </a>
              <a target="blank" href="https://github.com">
                <i className="icon ion ion-social-github"></i>
              </a>
              <a target="blank" href="https://twitter.com">
                <i className="icon ion ion-social-twitter"></i>
              </a>
              <a target="blank" href="https://www.youtube.com">
                <i className="icon ion ion-social-youtube"></i>
              </a>
              <a target="blank" href="https://plus.google.com">
                <i className="icon ion ion-social-googleplus"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="mouse-btn">
          <i className="icon ion ion-chevron-down"></i>
        </a>
      </div>
    
  )
}

export default Hero
