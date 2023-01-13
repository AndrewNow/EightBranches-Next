import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FacultyLeadership } from "../Faculty/facultyCards"

// we use the FacultyLeadership component because the Alumni page is structured
// just like the faculty page.
const AlumniQuery = () => {
  const data = useStaticQuery(graphql`
    query alumni {
      alumni: allFile(
        filter: {
          sourceInstanceName: { eq: "alumni" }
          internal: { mediaType: { eq: "text/markdown" } }
        }
        sort: {
          fields: childMarkdownRemark___frontmatter___title
          order: DESC
        }
      ) {
        edges {
          node {
            childrenMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
                email
                degree
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
  return data.alumni.edges?.map(alumniData => {
    const alumniQuery = alumniData.node.childrenMarkdownRemark[0]
    // Check to see if a query exists; if it has empty data then don't render it
    if (!alumniQuery) {
      return null
    }
    //abbreviations for the query routes
    const { title, degree, email } = alumniQuery.frontmatter
    const bio = alumniQuery.html
    const excerpt = alumniQuery.excerpt
    const slug = alumniQuery.fields.slug
    const portraitpic =
      alumniQuery.frontmatter.portrait?.childImageSharp?.gatsbyImageData
    return (
      alumniQuery && (
        <FacultyLeadership
          key={slug}
          title={title}
          role={degree}
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
export default AlumniQuery
