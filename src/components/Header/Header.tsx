import React, { useEffect, useState } from "react"
import Logo from "./Logo"
import NavLink from "./NavLink"

type Props = {}

const Header = (props: Props) => {
  const [menuActive, setMenuActive] = useState(false)
  const [filled, setFilled] = useState(false)

  const ScrollEvent = () => {
    if (window.scrollY > 50) {
      setFilled(true)
    } else {
      setFilled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent)
    return () => {
      window.removeEventListener("scroll", ScrollEvent)
    }
  }, [])

  return (
    <header className={`header ${filled ? "filled" : ""}`}>
      <div className="fw">
        <Logo />
        <a
          className={`menu-btn cursor-pointer ${menuActive ? "active" : ""}`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span></span>
        </a>
        <div className={`top-menu ${menuActive ? "active" : ""}`}>
          <ul>
            <NavLink id="about-section">About</NavLink>
            <NavLink id="services-section">What I Do</NavLink>
            <NavLink id="works-section">Works</NavLink>
            <NavLink id="testimonials-section">Testimonials</NavLink>
            <NavLink id="contact-section">Contact</NavLink>
          </ul>
          <a href="/#" rel="noopener" className="close"></a>
        </div>
      </div>
    </header>
  )
}

export default Header
