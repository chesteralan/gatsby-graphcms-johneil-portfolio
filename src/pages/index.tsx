import * as React from "react"
import type { HeadFC } from "gatsby"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import Portfolio from "../components/Portfolio/Portfolio"
import Blogs from "../components/Blogs/Blogs"
import Contacts from "../components/Contacts/Contacts"
import Footer from "../components/Footer/Footer"

const IndexPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blogs />
      <Contacts />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>John Tagudin</title>
