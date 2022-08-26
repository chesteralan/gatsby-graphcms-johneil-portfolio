import * as React from "react"
import { HeadFC } from "gatsby"
import IndexPage from "./index"

const NotFoundPage = () => {
  return <IndexPage />
}

export default NotFoundPage

export const Head: HeadFC = () => <title>John Tagudin</title>
