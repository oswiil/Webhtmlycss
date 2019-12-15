import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Dice from "../components/kuaicalc"

const SecondPage = () => (
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
        <input></input>
      </tr>
    </div>
    <div className="start">
      <p>
        AQUI UNA PEQUEÑA TABLA PARA DE DEMOSTRACIÓN DE LOS INGRESOS PASIVOS QUE
        PUEDES LLEGAR A GENERAR
      </p>
    </div>
    <table className="kuai__amount">
      <tr>
        <th>Cantidad en Kuais</th>
        <th>Valor en dólares</th>
        <th>Valor en euros</th>
        <th>Rentabilidad diaria</th>
        <th>Cantidad total remunerada</th>
      </tr>
      <tr>
        <td>
          <input id="kuaintity" type="number"></input>
        </td>
        <td>
          <input type="text" ID="add" NAME="result" VALUE="" />
        </td>
        <td>
          <input type="text" ID="add" NAME="result" VALUE="" />
        </td>
        <td>
          <input type="text" ID="add" NAME="result" VALUE="" />
        </td>
        <td>
          <input type="text" ID="add" NAME="result" VALUE="" />
        </td>
      </tr>
    </table>
  </Layout>
)

export default SecondPage
