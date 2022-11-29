import React from "react"
import { Link } from "gatsby"

type Props = {}

const FormLink = (props: Props) => {
  return (
    <>
      <Link to="/work-with-me" className="btn btn-yellow">
        Work With Me
      </Link>
    </>
  )
}

export default FormLink
