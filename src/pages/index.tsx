import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <>
      Welcome to my portfolio site!
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>John Tagudin</title>
