import * as React from "react"
import type { GatsbySSR } from "gatsby"
import PageLayout from "./src/layouts/PageLayout"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return <PageLayout>{element}</PageLayout>
}
