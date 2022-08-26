import React, { useRef, useEffect, useState } from "react"
import type { Portfolio, PortfolioCategory } from "./Portfolio"
import Modal from "../Modal/Modal"

type Props = {
  portfolio: Portfolio
  close: any
}

const PortfolioModal = ({ portfolio, close }: Props) => {
  const modalContent = useRef<HTMLElement>()
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(620)

  const { title, youtubeId } = portfolio

  useEffect(() => {
    if (modalContent.current) {
      setHeight(modalContent.current.offsetHeight)
      setWidth(modalContent.current.offsetWidth)
    }
  }, [modalContent])

  const handleClose = () => {
    close()
  }

  return (
    <Modal>
      <>
        <div className="modal-wrapper" onClick={handleClose}></div>
        <div
          className="popup-box modal-content"
          ref={modalContent as React.RefObject<HTMLDivElement>}
          style={{
            top: `calc(50% - ${height / 2 + 50}px`,
            left: `calc(50% - ${width / 2}px`,
          }}
        >
          <div className="content">
            <div className="image">
              <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
          <button type="button" className="close" onClick={handleClose}>
            ×
          </button>
        </div>
      </>
    </Modal>
  )
}

export default PortfolioModal
