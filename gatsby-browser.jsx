const React = require("react")
const Layout = require("./src/components/Layout.tsx").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}