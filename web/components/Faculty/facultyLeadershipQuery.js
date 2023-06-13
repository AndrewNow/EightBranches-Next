'use client'
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FacultyLeadership } from "./facultyCards"

const FacultyLeadershipQuery = () => {
  const data = useStaticQuery(graphql`
    query facultyLeadership {
      facultyLeadership: allFile(
        filter: {
          sourceInstanceName: { eq: "facultyLeadership" }
          internal: { mediaType: { eq: "text/markdown" } }
        }
        sort: { fields: childMarkdownRemark___frontmatter___ordernumber, order: ASC }
      ) {
        edges {
          node {
            childrenMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
                role
                ordernumber
                email
                portrait {
                  childImageSharp {
                    gatsbyImageData(
                      width: 950
                      quality: 100
                      placeholder: BLURRED
                      formats: [WEBP]
                      aspectRatio: 1.75
                    )
                  }
                }
              }
              excerpt(pruneLength: 160)
              html
            }
          }
        }
      }
    }
  `)
  return data.facultyLeadership.edges?.map(facultyLeadershipData => {
    const leadershipQuery = facultyLeadershipData.node.childrenMarkdownRemark[0]
    // Check to see if a query exists; if it has empty data then don't render it
    if (!leadershipQuery) {
      return null
    }
    //abbreviations for the query routes
    const {
      title,
      role,
      email,
    } = leadershipQuery.frontmatter
    const bio = leadershipQuery.html
    const excerpt = leadershipQuery.excerpt
    const slug = leadershipQuery.fields.slug
    const portraitpic =
      leadershipQuery.frontmatter.portrait.childImageSharp.gatsbyImageData
    return (
      leadershipQuery && (
        <FacultyLeadership
          key={slug}
          title={title}
          role={role}
          excerpt={excerpt}
          bio={bio}
          email={email}
          slug={slug}
          portraitpic={portraitpic}
        />
      )
    )
  })
}
export default FacultyLeadershipQuery
