import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="header">
			<div className="fw">
				<div className="logo">
					<a href="#">Hendrix</a>
				</div>
				<a href="#" className="menu-btn"><span></span></a>
				<div className="top-menu">
					<ul>
						<li><a href="#about-section">About</a></li>
						<li><a href="#services-section">What I Do</a></li>
						<li><a href="#works-section">Works</a></li>
						<li><a href="#blog-section">Blog</a></li>
						<li><a href="#contact-section">Contact</a></li>
					</ul>
					<a href="#" className="close"></a>
				</div>
			</div>
		</header>
  )
}

export default Header