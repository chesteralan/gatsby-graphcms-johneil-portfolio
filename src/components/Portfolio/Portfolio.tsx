import React from 'react'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <div className="section works align-left" id="works-section">
				<div className="fw">
					<div className="titles">
						<div className="title">Recent Works</div>
					</div>
					<div className="filters">
						<div className="f_btn active">
							<label><input type="radio" name="fl_radio" value="box-item" />All</label>
						</div>
						<div className="f_btn">
							<label><input type="radio" name="fl_radio" value="f-branding" />Branding</label>
						</div>
						<div className="f_btn">
							<label><input type="radio" name="fl_radio" value="f-mockups" />Mockups</label>
						</div>
						<div className="f_btn">
							<label><input type="radio" name="fl_radio" value="f-ui" />UI Kits</label>
						</div>
						<div className="f_btn">
							<label><input type="radio" name="fl_radio" value="f-photo" />Photography</label>
						</div>
					</div>
					<div className="row box-items">
						<div className="col col-m-12 col-t-6 col-d-4 box-item f-mockups">
							<div className="item">
								<div className="desc">
									<div className="image">
										<a href="#popup-1" className="has-popup"><img src="images/works/work1.jpg" alt="" /></a>
									</div>
								</div>
							</div>
							<div id="popup-1" className="popup-box mfp-fade mfp-hide">
								<div className="content">
									<div className="image">
										<img src="images/works/work1.jpg" alt="" />
									</div>
									<div className="desc">
										<div className="category">Mockups</div>
										<h4>Shopping Bag PSD MockUp</h4>
										<p>
											Here’s a new b-cards mock-up with several business cards scattered across the scene. The PSD file allows you to easily. Here’s a new b-cards mock-up with several business cards scattered across the scene.
										</p>
										<a href="#" className="btn">View Project</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col col-m-12 col-t-6 col-d-4 box-item f-branding">
							<div className="item">
								<div className="desc">
									<div className="image">
										<a href="#popup-2" className="has-popup"><img src="images/works/work2.jpg" alt="" /></a>
									</div>
								</div>
							</div>
							<div id="popup-2" className="popup-box mfp-fade mfp-hide">
								<div className="content">
									<div className="image">
										<img src="images/works/work2.jpg" alt="" />
									</div>
									<div className="desc">
										<div className="category">Branding</div>
										<h4>Hanging Wall Sign</h4>
										<p>
											The freebie of the day is a logo design kit with an original theme that will help you create 
											stunning mountain bike related logos in just minutes.
										</p>
										<a href="#" className="btn">View Project</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col col-m-12 col-t-6 col-d-4 box-item f-mockups">
							<div className="item">
								<div className="desc">
									<div className="image">
										<a href="#popup-3" className="has-popup"><img src="images/works/work3.jpg" alt="" /></a>
									</div>
								</div>
							</div>
							<div id="popup-3" className="popup-box mfp-fade mfp-hide">
								<div className="content">
									<div className="image">
										<img src="images/works/work3.jpg" alt="" />
									</div>
									<div className="desc">
										<div className="category">Mockups</div>
										<h4>Realistic Business Cards</h4>
										<p>
											Today we’re happy to share with you the mockup of a classNameic notebook that will help you showcase your drawings. Today we’re happy to share with you the mockup of a classNameic notebook that will help.
										</p>
										<a href="#" className="btn">View Project</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col col-m-12 col-t-6 col-d-4 box-item f-branding">
							<div className="item">
								<div className="desc">
									<div className="image">
										<a href="#popup-4" className="has-popup"><img src="images/works/work4.jpg" alt="" /></a>
									</div>
								</div>
							</div>
							<div id="popup-4" className="popup-box mfp-fade mfp-hide">
								<div className="content">
									<div className="image">
										<img src="images/works/work4.jpg" alt="" />
									</div>
									<div className="desc">
										<div className="category">Branding</div>
										<h4>Juice Bottle Packaging</h4>
										<p>
											Today we have for you a set of 20 icons available in 2 styles: colored flat and line version, 
											designed on a 128px grid. These polished icons come in multiple formats so you can easily include them in your projects.
										</p>
										<a href="#" className="btn">View Project</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col col-m-12 col-t-6 col-d-4 box-item f-photo">
							<div className="item">
								<div className="desc">
									<div className="image">
										<a href="#popup-5" className="has-popup"><img src="images/works/work5.jpg" alt="" /></a>
									</div>
								</div>
							</div>
							<div id="popup-5" className="popup-box mfp-fade mfp-hide">
								<div className="content">
									<div className="image">
										<img src="images/works/work5.jpg" alt="" />
									</div>
									<div className="desc">
										<div className="category">Photography</div>
										<h4>Mug PSD MockUp</h4>
										<p>
											Mapogo is an expertly crafted UI kit perfect for iOS designers and developers. The free sample includes 10 screens (750×1334 px) that can be easily customized in Photoshop
										</p>
										<a href="#" className="btn">View Project</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col col-m-12 col-t-6 col-d-4 box-item f-ui">
							<div className="item">
								<div className="desc">
									<div className="image">
										<a href="#popup-6" className="has-popup"><img src="images/works/work6.jpg" alt="" /></a>
									</div>
								</div>
							</div>
							<div id="popup-6" className="popup-box mfp-fade mfp-hide">
								<div className="content">
									<div className="image">
										<img src="images/works/work6.jpg" alt="" />
									</div>
									<div className="desc">
										<div className="category">UI Kits</div>
										<h4>A4 Paper PSD</h4>
										<p>
											The freebie of the day is Chameleon, a modern UI kit perfect to use for creating a stylish and clean mobile app. This kit includes 10 screens from various categories that can be easily edited.
										</p>
										<a href="#" className="btn">View Project</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="clear"></div>
				</div>
			</div>
			
  )
}

export default Portfolio