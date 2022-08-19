import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="section about align-left" id="about-section">
				<div className="fw">
					<div className="row">
						<div className="col col-m-12 col-t-4 col-d-4">
							<div className="profile">
								<img src="images/profile.jpeg" alt="" />
							</div>
						</div>
						<div className="col col-m-12 col-t-8 col-d-8">
							<div className="text-box">
								<h1>I'm Steven Hendrix, <br />Web Designer & Web Developer <br />from United States, California.</h1>
								<p>
									I have rich experience in web site design & building and customization. Also I am good at html, css, javascript, wordpress, php, jquery, bootstrap. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea.
								</p>
							</div>
							<div className="bts">
								<a href="#" className="btn extra">Download Resume</a>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default About