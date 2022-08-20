import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

type Props = {}

const DownloadLink = (props: Props) => {

    const data = useStaticQuery(graphql`
    {
        graphCmsSettings(key: {eq: About_Download_Resume_Link}) {
          value
        }
      }
    `);

    const About_Download_Resume_Link = data.graphCmsSettings?.value

  return (<>
    {About_Download_Resume_Link && <a href={About_Download_Resume_Link} target="_blank" className="btn extra">Download Resume</a>}
    </>
  )
}

export default DownloadLink