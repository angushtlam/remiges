import React from 'react'
import {Link as GatsbyLink, graphql} from 'gatsby'
import {Box, Header, Link, List, ListItem, Paragraph, spacing} from 'remiges'
import Screen from '../components/Screen'

const ComponentsPage = ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => {
  const components = edges.map(edge => {
    const component = edge.node
    return {
      id: component.id,
      path: component.fields.slug,
      title: component.fields.relativeDirectory,
    }
  })

  return (
    <Screen>
      <Box
        horizontallyCenter
        readingContainer
        padding={['3.6em', spacing.normal, spacing.normal, spacing.normal]}
      >
        <Header>Components</Header>
        <Paragraph>These are the components available in Remiges.</Paragraph>
        <List>
          {components.map(component => (
            <ListItem key={component.id}>
              <Link to={`/${component.path}`} using={GatsbyLink}>
                <strong>{component.title}</strong>
              </Link>{' '}
            </ListItem>
          ))}
        </List>
      </Box>
    </Screen>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
            relativeDirectory
          }
        }
      }
    }
  }
`

export default ComponentsPage
