const withMdxEnhanced = require("next-mdx-enhanced");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  withMdxEnhanced({
    remarkPlugins: [require("@fec/remark-a11y-emoji")],
  }),
]);
