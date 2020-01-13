import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name} ${this.state.message}!`)
  }
  render() {
    return (
      <Layout>
        <SEO title="Contacto" />

        <div className="header">
          <h1>Contact</h1>
        </div>

        <div className="Contact__form">
          <form method="post" action="#">
            <label>
              NickName*
              <input
                name="name"
                type="text"
                placeholder="Oswil3"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <label>
              Email *
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="example@mail.com"
                required
              />
            </label>
            <label>
              Message
              <textarea
                id="message"
                name="message"
                rows="5"
                cols="33"
                placeholder="message"
              ></textarea>
            </label>
            <button type="submit">Submit</button>{" "}
          </form>
        </div>
      </Layout>
    )
  }
}
