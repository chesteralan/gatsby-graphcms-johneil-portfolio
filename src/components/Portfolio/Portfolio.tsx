import React, { useState } from "react"
import Categories from "./Categories"
import PortfolioItem from "./PortfolioItem"
import { graphql, useStaticQuery } from "gatsby"
import type { IGatsbyImageData } from "gatsby-plugin-image"

type Props = {}

export type PortfolioCategory = {
	name: string;
	portfolios: Portfolio[]
}

export type Portfolio = {
  title: string;
  description: string;
  thumbnail: IGatsbyImageData;
  portfolioCategories: PortfolioCategory[];
  link: string;
}

const Portfolio = (props: Props) => {

  const [currentCategory, setCurrentCategory] = useState("");

  const data = useStaticQuery(graphql`
    {
      allGraphCmsPortfolio {
        nodes {
          title
          description
          thumbnail {
            gatsbyImageData(width: 360)
          }
          portfolioCategories {
            name
          }
		  link
        }
      }
    }
  `)

  const portfolios = data.allGraphCmsPortfolio?.nodes
	const filteredPortfolios = portfolios.filter((p:Portfolio) => {
		if(currentCategory === "") return true;
		const categories = p.portfolioCategories.reduce((a:string[],c) => {
			a.push(c.name)
			return a;
		},[] as string[])
		return categories.includes(currentCategory);
	})

  return (
    <div className="section works align-left" id="works-section">
      <div className="fw">
        <div className="titles">
          <div className="title">Recent Works</div>
        </div>

        <Categories useFilter={[currentCategory, setCurrentCategory]} />

        <div className="row box-items">

          {filteredPortfolios.map((portfolio: Portfolio, index: number) => (
            <PortfolioItem key={index.toString()} portfolio={portfolio} />
          ))}

        </div>
        <div className="clear"></div>
      </div>
    </div>
  )
}

export default Portfolio
