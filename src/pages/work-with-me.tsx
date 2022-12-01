import * as React from "react"
import type { HeadFC } from "gatsby"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import Testimonials from "../components/Testimonials/Testimonials"

const IndexPage = () => {
  return (
    <>
      <div className="page">
        <Header />
        <div className="container">
          <Form />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>John Tagudin</title>
