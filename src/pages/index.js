import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AOS from "aos"
import "aos/dist/aos.css"
AOS.init({ offset: 100 })
export const query = graphql`
  {
    allBlogPost {
      nodes {
        id
        date
        title
        body
      }
    }
  }
`

export default ({ data }) => (
  <>
    <Layout>
      <div
        className="rows"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {data.allBlogPost.nodes.map(post => (
          <div key={post.id}>
            <div
              style={{
                maxWidth: "70%",
                color: "white",
                marginTop: "10px",
                margin: "0 auto",
                fontSize: "15px",
              }}
            >
              {post.date}
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: post.body }}
              style={{
                maxWidth: "70%",
                color: "white",
                margin: "0 auto",
                textAlign: "justify",
              }}
            />
          </div>
        ))}
      </div>
    </Layout>
  </>
)
