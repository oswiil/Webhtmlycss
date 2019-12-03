import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <h3>INDICE</h3>
      <li>
        <a href="#li1">Guia de registro</a>
      </li>
      <li>
        <a href="#li2">Referal Links</a>
      </li>
      <li>
        <a href="#li3">Contacto</a>
      </li>
    </div>
    <div className="start">
      <h1>HOW TO START</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
    </div>
    <div id="li1" className="guide">
      <h2>GUIA DE REGISTRO</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </div>
    <div className="reflink">
      <h3 id="li2">BUY KUAIS.</h3>
      ref Link :
      <a href="http://app.kuailiandp.com/auth/register/ref/8effea01-dc72-497e-b89a-271c592db093">
        http://app.kuailiandp.com/auth/register/ref
      </a>
    </div>
    <div className="contact">
      <h2 id="li3">Contacto</h2>
      <a href="mailto:info@example.com?subject=email%20subject">mail link</a>
    </div>
  </Layout>
)

export default IndexPage
