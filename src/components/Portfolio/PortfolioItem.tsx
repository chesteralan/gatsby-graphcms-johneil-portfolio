import React, { useState } from "react"
import type { Portfolio } from "./Portfolio"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import PortfolioModal from "./PortfolioModal"

type Props = {
  portfolio: Portfolio
}

const PortfolioItem = ({ portfolio }: Props) => {
  const [active, setActive] = useState(false)
  const { title, thumbnail } = portfolio
  const image = getImage(thumbnail) as IGatsbyImageData

  return (
    <div className="col box-item f-mockups">
      <div className="item">
        <div className="desc">
          <div
            className="image cursor-pointer portfolio-item"
            onClick={() => setActive(true)}
          >
            <GatsbyImage image={image} alt={title} />
          </div>
          {active && (
            <PortfolioModal
              close={() => setActive(false)}
              portfolio={portfolio}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
