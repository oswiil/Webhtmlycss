import React from "react"

const FootDescript = () => {
  return (
    <footer className="foooter">
      <div className="foo__background">
        <div className="kuail_logo" alt="kuail_logo">
          <img src="/download.png" />
        </div>
        <div className="FPKTlogo">
          <img src="/FPKT.png" />
        </div>
        <div className="RSociales">
          <img src="/face.png" alt="facebook" />
          <img src="/twitter.png" alt="twitter" />
          <img src="/insta.png" alt="instagram" />{" "}
        </div>
        <div className="info">
          <div className="ubi__footer">
            <img className="ubi__image" src="/ubi.png"></img>
            <p>
              <span>Cardenal Tedeschini</span>Barcelona, España
            </p>
          </div>
          <div className="phone__footer">
            <img className="phone__image" src="/phone.png"></img>
            <p>+34 612 23 45 67</p>
          </div>
          <div className="mail__footer">
            <img className="mail__image" src="/mail.png"></img>
            <p>
              <a href="mailto:info_farpotshket@gmail.com">
                info_farpotshket@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FootDescript
