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
  return (
    <Container>
      {children}
      <br />
      <p>version 0.12</p>
      <p>
        made by (
        <a target="_blank" href="https://markyabut.com/">
          mark yabut
        </a>
        )
      </p>
    </Container>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
export default Layout
