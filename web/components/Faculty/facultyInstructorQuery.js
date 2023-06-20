import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FacultyInstructor } from "./facultyCards"

const FacultyInstructorQuery = () => {
  const data = useStaticQuery(graphql`
    query facultyInstructor {
      facultyInstructor: allFile(
        filter: {
          sourceInstanceName: { eq: "facultyInstructor" }
          internal: { mediaType: { eq: "text/markdown" } }
        }
        sort: { fields: childMarkdownRemark___frontmatter___ordernumber, order: DESC }
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
                email
                ordernumber
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
  return data.facultyInstructor.edges?.map(facultyInstructorData => {
    const InstructorQuery = facultyInstructorData.node.childrenMarkdownRemark[0]
    // Check to see if a query exists; if it has empty data then don't render it
    if (!InstructorQuery) {
      return null
    }
    //abbreviations for the query routes
    const { title, role, email } = InstructorQuery.frontmatter
    const bio = InstructorQuery.html
    const excerpt = InstructorQuery.excerpt
    const slug = InstructorQuery.fields.slug
    const portraitpic =
      InstructorQuery.frontmatter.portrait?.childImageSharp?.gatsbyImageData
    
    return (
      InstructorQuery && (
        <FacultyInstructor
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
export default FacultyInstructorQuery
