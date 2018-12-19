const path = require('path')
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({actions, getConfig}) => {
  const config = getConfig()

  actions.replaceWebpackConfig({
    ...config,
    output: {
      ...config.output,
      globalObject: 'this',
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        lib: path.resolve(__dirname, 'lib'),
        remiges$: path.resolve(__dirname, 'lib', 'index.js'),
      },
    },
  })
}

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const slug = createFilePath({
      node,
      getNode,
      basePath: fileNode.sourceInstanceName,
    })

    createNodeField({
      node,
      name: `slug`,
      value: `${fileNode.sourceInstanceName}${slug}`,
    })

    createNodeField({
      node,
      name: `relativeDirectory`,
      value: `${fileNode.relativeDirectory}`,
    })

    createNodeField({
      node,
      name: `type`,
      value: `${fileNode.sourceInstanceName}`,
    })
  }
}

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                type
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./www/templates/${node.fields.type}.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
