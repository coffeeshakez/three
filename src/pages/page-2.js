import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GridShot from "../components/gridShot/GridShot";

const SecondPage = () => (
  <Layout>
    <GridShot></GridShot>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
