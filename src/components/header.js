import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `0.90rem`,
    }}
  >
    <div
      style={{
        maxWidth: 300,
        float: "left",
        margin: "2%",
      }}
    >
      <img src="/download.png" />
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 400,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            boxShadow: "white",
            color: `White`,
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
