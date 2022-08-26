import * as React from "react"
import type { HeadFC } from "gatsby"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import Portfolio from "../components/Portfolio/Portfolio"
import Contacts from "../components/Contacts/Contacts"
import Footer from "../components/Footer/Footer"
import Testimonials from "../components/Testimonials/Testimonials"

const IndexPage = () => {
  return (
    <>
      <div className="page">
        <Header />
        <div className="container">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contacts />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>John Tagudin</title>
