import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="align-center">
    <div className="socials">
        <a target="blank" href="https://www.facebook.com"><i className="icon ion ion-social-facebook"></i></a>
        <a target="blank" href="https://github.com"><i className="icon ion ion-social-github"></i></a>
        <a target="blank" href="https://twitter.com"><i className="icon ion ion-social-twitter"></i></a>
        <a target="blank" href="https://www.youtube.com"><i className="icon ion ion-social-youtube"></i></a>
        <a target="blank" href="https://plus.google.com"><i className="icon ion ion-social-googleplus"></i></a>
    </div>
    <div className="copy">© 2018 Hendrix. all rights reserved.</div>
</footer>
  )
}

export default Footer