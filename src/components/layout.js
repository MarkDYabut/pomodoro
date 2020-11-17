import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  margin: 4rem auto;
  margin-bottom: 100px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`

const Layout = ({ children }) => {
  return <Container>{children}</Container>
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
export default Layout
