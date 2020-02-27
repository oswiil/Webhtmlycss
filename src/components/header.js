import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Buttons from "./buttonLinks"

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      backgroundColor: "transparent",
      borderBottom: "0.1px solid  rgba(34, 58, 80 ",
    }}
  >
    <div
      style={{
        maxWidth: "50%",
        float: "right",
        margin: "3%",
      }}
    >
      <Buttons className="fade" />
    </div>

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 380,
        padding: `1.45rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
