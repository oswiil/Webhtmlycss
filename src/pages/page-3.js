import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contacto" />

    <div className="imageDescript"></div>

    <div className="header">
      <h1>Contact</h1>
    </div>

    <div class="Contact__form">
      <label>
        <input type="text" placeholder="First name" />
      </label>
      <label>
        <input type="text" placeholder="Email" />
      </label>
      <label>
        <input type="text" placeholder="Phone" />
      </label>

      <label>
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          placeholder="Message"
        ></textarea>
      </label>
      <button onSubmit>Submit</button>
    </div>
  </Layout>
)

export default ContactPage
