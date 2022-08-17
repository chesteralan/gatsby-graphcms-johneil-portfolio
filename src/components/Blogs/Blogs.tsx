import React from 'react'

type Props = {}

const Blogs = (props: Props) => {
  return (
    <div className="section blog align-left gray" id="blog-section">
				<div className="fw">
					<div className="titles">
						<div className="title">Latest Blogs</div>
					</div>
					<div className="row blog-items">
						<div className="col col-m-12 col-t-4 col-d-4">
							<div className="blog-item">
								<div className="image">
									<a href="blog-inner.html"><img src="images/blog/blog1.png" alt="" /></a>
								</div>
								<a href="blog-inner.html" className="name">By spite about do of do allow blush</a>
								<p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.</p>
								<div className="date">Larry Stark - 7 September 2016</div>
							</div>
						</div>
						<div className="col col-m-12 col-t-4 col-d-4">
							<div className="blog-item">
								<div className="image">
									<a href="blog-inner.html"><img src="images/blog/blog2.png" alt="" /></a>
								</div>
								<a href="blog-inner.html" className="name">Two Before Arrow Not Relied</a>
								<p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.</p>
								<div className="date">Larry Stark - 7 September 2016</div>
							</div>
						</div>
						<div className="col col-m-12 col-t-4 col-d-4">
							<div className="blog-item">
								<div className="image">
									<a href="blog-inner.html"><img src="images/blog/blog3.png" alt="" /></a>
								</div>
								<a href="blog-inner.html" className="name">By spite about do of do allow blush</a>
								<p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.</p>
								<div className="date">Larry Stark - 7 September 2016</div>
							</div>
						</div>
					</div>
                    <div className="bts">
                        <a href="blog.html" className="btn extra">View Blog</a>
                    </div>
					<div className="clear"></div>
				</div>
			</div>
  )
}

export default Blogs