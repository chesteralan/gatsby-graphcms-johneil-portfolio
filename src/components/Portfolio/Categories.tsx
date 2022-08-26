import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import type { PortfolioCategory } from "./Portfolio"

type Props = {
  useFilter: [string, any]
}

const Categories = ({ useFilter }: Props) => {
  const [currentCategory, setCurrentCategory] = useFilter

  const data = useStaticQuery(graphql`
    {
      allGraphCmsPortfolioCategory(sort: { fields: name }) {
        nodes {
          name
          portfolios {
            id
          }
        }
      }
    }
  `)

  const categories = data.allGraphCmsPortfolioCategory?.nodes
  const filteredCategories = categories.filter(
    (c: PortfolioCategory) => c.portfolios.length > 0
  )

  return (
    <div className="filters">
      <div
        className={`f_btn ${currentCategory === "" ? "active" : ""}`}
        onClick={() => setCurrentCategory("")}
      >
        <label>
          <input type="radio" name="fl_radio" value="box-item" />
          All
        </label>
      </div>
      {filteredCategories.map(({ name }: PortfolioCategory, index: number) => (
        <div
          key={index.toString()}
          className={`f_btn ${currentCategory === name ? "active" : ""}`}
          onClick={() => setCurrentCategory(name)}
        >
          <label>{name}</label>
        </div>
      ))}
    </div>
  )
}

export default Categories
