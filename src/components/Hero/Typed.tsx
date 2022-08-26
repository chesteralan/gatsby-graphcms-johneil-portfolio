import React, { useRef, useEffect } from "react"
import Typed from "typed.js"
import { graphql, useStaticQuery } from "gatsby"

type Props = {}

const TypedComponent = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      graphCmsSettings(key: { eq: Hero_Keywords }) {
        value
      }
    }
  `)

  const Hero_Keywords = data.graphCmsSettings?.value || "Developer,Photographer"

  const el = useRef(null)
  const typed = useRef<any>(null)

  useEffect(() => {
    const options = {
      strings: Hero_Keywords.split(","),
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 5000,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new (Typed as any)(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      if (typed && typed.current) {
        typed.current.destroy()
      }
    }
  }, [])

  return (
    <div className="st-title align-center">
      <span className="typed-title" ref={el}></span>
    </div>
  )
}

export default TypedComponent
