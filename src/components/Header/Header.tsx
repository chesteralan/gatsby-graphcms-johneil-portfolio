import React, { useEffect, useState } from 'react'
import NavLink from './NavLink'

type Props = {}

const Header = (props: Props) => {
	
	const [filled, setFilled] = useState(false);

	const ScrollEvent = () => {
		if (window.scrollY > 50) {
			setFilled(true);
		  } else {
			setFilled(false);
		  }
	}

	useEffect(() => {
		window.addEventListener("scroll", ScrollEvent);
		return () => {
			window.removeEventListener("scroll", ScrollEvent);
		};
	},[])

  return (
    <header className={`header ${filled ? 'filled' : ''}`}>
			<div className="fw">
				<div className="logo">
					<a href="#">Hendrix</a>
				</div>
				<a href="#" className="menu-btn"><span></span></a>
				<div className="top-menu">
					<ul>
						<NavLink id="about-section">About</NavLink>
						<NavLink id="services-section">What I Do</NavLink>
						<NavLink id="works-section">Works</NavLink>
						<NavLink id="blog-section">Blog</NavLink>
						<NavLink id="contact-section">Contact</NavLink>
					</ul>
					<a href="#" className="close"></a>
				</div>
			</div>
		</header>
  )
}

export default Header