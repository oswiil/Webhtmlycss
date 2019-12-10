import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const useHomeInfo = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home" } }) {
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
  `)
  return data.markdownRemark
}

export default useHomeInfo
