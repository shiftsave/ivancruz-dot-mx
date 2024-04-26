import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <div className={styles.intro}>
      <h1>
      I’m Iván, a designer with over 16 years of experience across interaction design, animation and frontend web development. I love designing products that help companies grow while providing value and joy to those using them.</h1>
      <h1>Get in touch to learn more about my work.</h1>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Ivan Cruz" />

export default IndexPage
