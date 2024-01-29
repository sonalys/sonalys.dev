
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.nodes
  const template = require.resolve("./src/templates/blog-post.js");
  
  posts.forEach(node => {
    createPage({
      path: `blog${node.frontmatter.slug}`,
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.frontmatter.slug },
    })
  })
}