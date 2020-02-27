import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
AOS.init({ offset: 100 })
const Portada = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      style={{ maxWidth: "100%", display: "flex" }}
    >
      <img src="/viajeportada.jpg" alt="Instagram" />
    </div>
  )
}

export default Portada
