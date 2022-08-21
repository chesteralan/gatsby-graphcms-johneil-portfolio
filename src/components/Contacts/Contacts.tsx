import React, { useState } from "react"
import axios from "axios"

type Props = {}
type Message = {
    name?: string;
    email?: string;
    message?: string;
}

const validateEmail = (email:string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const Contacts = (props: Props) => {

    const [active,setActive] = useState(false)
    const [sent,setSent] = useState(false)
    const [message,setMessage] = useState<Message>({})

    const validateMessage = () => {
        if(message === {}) {
            setActive(false);
            return;
        }
        const keys = Object.keys(message);
        let validate = false;
        ["name","email","message"].forEach(key => {
            if(keys.includes(key)) {
                validate = true;
            } else {
                validate = false;
            }
            if( (message as any)[key] === "" ) {
                validate = false;
            }
            if( (message as any)[key] === undefined ) {
                validate = false;
            }            
        });
        if( (message as any)["email"] !== undefined ) {
            if( !validateEmail((message as any)["email"]) ) {
                validate = false;
            }
        }
        setActive(validate);        
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if( !["name","email","message"].includes(event.target.name) ) return;
        setMessage(Object.assign(message,{
            [event.target.name]: event.target.value
        }))
        validateMessage();
    }


    const handleSendMessage = () => {
        if(!active) return;
        if(sent) return;
        axios.post('/api/contact', message)
          .then(function () {
            setSent(true);
          })
          .catch(function (error) {
            console.log(error);
            setSent(true);
          });
    }

  return (
    <div className="section contacts align-left" id="contact-section">
      <div className="fw">
        <div className="titles">
          <div className="title">Contact Me</div>
        </div>
        <div className="contact-form">
          {!sent && <form id="cform" method="post">
            <div className="row">
              <div className="col col-m-12 col-t-6 col-d-6">
                <div className="value">
                  <input type="text" name="name" placeholder="Name *" onChange={handleChange} />
                </div>
              </div>
              <div className="col col-m-12 col-t-6 col-d-6">
                <div className="value">
                  <input type="email" name="email" placeholder="Email *" onChange={handleChange} />
                </div>
              </div>
              <div className="col col-m-12 col-t-12 col-d-12">
                <div className="value">
                  <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
                </div>
              </div>
              {active && <div className="col col-m-12 col-t-12 col-d-12">
                <a type="button" className="btn" onClick={handleSendMessage}>
                  Send Message
                </a>
              </div>}
            </div>
          </form>}
          {sent && <div className="alert-success">
            <p>
              Thanks, your message is sent successfully.
            </p>
            <p>
              I will contact you
              as soon as possible!
            </p>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Contacts
