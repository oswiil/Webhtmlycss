import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Rand from "../components/registrylink"
import OpenSite from "../components/regostylinks"

const SecondPage = () => {
  const { random } = OpenSite()
  return (
    <Layout>
      <SEO title="Registro" />
      <div className="header">
        <h1>PAGINA DEL LINK</h1>
      </div>
      <div className="start">
        <p>Registrate AQUI</p>
      </div>
      <div className="kuai__amount">
        LINK
        <tr>
          <a href="javascript:OpenSite()">Registrarse en Kuailiandp</a>
        </tr>
      </div>
      <Rand></Rand>
    </Layout>
  )
}

export default SecondPage
