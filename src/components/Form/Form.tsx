import React from "react"

type Props = {}

const Form = (props: Props) => {
  return (
    <div
      className="section contacts align-left"
      id="contact-section"
      style={{ marginTop: 50 }}
    >
      <div className="fw">
        <div className="titles">
          <div className="title">Work With Me</div>
        </div>
        <div className="contact-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfnWeMCk9N5HZw-0PgI_92v5OURbbNzgRYsVCjWhxsvkq5ONA/viewform?embedded=true"
            width="100%"
            height="1800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Form
