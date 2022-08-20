import React, { useRef, useEffect, useState } from "react"
import type { Portfolio, PortfolioCategory } from "./Portfolio"
import Modal from "../Modal/Modal"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

type Props = {
  portfolio: Portfolio;
  close: any;
}

const PortfolioModal = ({ portfolio, close }: Props) => {

  const modalContent = useRef<HTMLElement>();
  const [height, setHeight] = useState(0);

  const { title, description, thumbnail, link, portfolioCategories } = portfolio
  const image = getImage(thumbnail) as IGatsbyImageData

  useEffect(() => {
    if( modalContent.current ) {
        setHeight(modalContent.current.offsetHeight)
    }
  },[modalContent]);

  const handleClose = () => {
    close()
  }
  return (
    <Modal>
      <>
            <div className="modal-wrapper" onClick={handleClose}></div>
            <div className="popup-box modal-content" 
            ref={modalContent as React.RefObject<HTMLDivElement>} 
            style={{ top: `calc(50% - ${height / 2}px`}}
            >
                <div className="content">
                  <div className="image">
                    <GatsbyImage image={image} alt={title} />
                  </div>
                  <div className="desc">

                    {portfolioCategories.map((category:PortfolioCategory, index:number) => (<>
                    <div key={index.toString()} className="category">
                        {category.name}
                    </div>{" "}
                    </>))}

                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href={link} target="_blank" className="btn">
                      View Project
                    </a>
                  </div>
                </div>
                <button type="button" className="close" onClick={handleClose}>×</button>
              </div>

      </>
    </Modal>
  )
}

export default PortfolioModal
