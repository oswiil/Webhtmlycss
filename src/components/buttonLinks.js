import React from "react"

import { Link } from "gatsby"
import classnames from "classnames"

const links = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "Kuail",
    path: "/page-2",
  },
  {
    label: "Contact",
    path: "/page-3",
  },
]
const selectedLinkClassName = link =>
  classnames({ selected: link === window.location.pathname })

const Button = () => {
  return (
    <div className="Links">
      {links.map(({ path, label }) => (
        <Link to={path} key={path} className={selectedLinkClassName(path)}>
          {label}
        </Link>
      ))}
    </div>
  )
}
export default Button
