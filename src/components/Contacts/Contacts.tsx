import React from 'react'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className="section contacts align-left" id="contact-section">
    <div className="fw">
        <div className="titles">
            <div className="title">Contact Me</div>
        </div>
        <div className="contact-form">
            <form id="cform" method="post">
                <div className="row">
                    <div className="col col-m-12 col-t-6 col-d-6">
                        <div className="value">
                            <input type="text" name="name" placeholder="Name *" />
                        </div>
                    </div>
                    <div className="col col-m-12 col-t-6 col-d-6">
                        <div className="value">
                            <input type="tel" name="tel" placeholder="Phone *" />
                        </div>
                    </div>
                    <div className="col col-m-12 col-t-6 col-d-6">
                        <div className="value">
                            <input type="text" name="email" placeholder="Email *" />
                        </div>
                    </div>
                    <div className="col col-m-12 col-t-6 col-d-6">
                        <div className="value">
                            <input type="text" name="subject" placeholder="Subject *" />
                        </div>
                    </div>
                    <div className="col col-m-12 col-t-12 col-d-12">
                        <div className="value">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col col-m-12 col-t-12 col-d-12">
                        <a href="#" className="btn">Send Message</a>
                    </div>
                </div>
            </form>
            <div className="alert-success">
                <p>Thanks, your message is sent successfully. We will contact you shortly!</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contacts