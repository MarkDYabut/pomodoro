import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Box = styled.div`
  font-style: italic;
`

const Quotes = ({ children }) => {
  return (
    <i>
      <p>"value of time itself is dictated by how well it is used"</p>
      <p>"commit to something or be distracted by everything"</p>
      <p>"track the past, organize the present, design the future"</p>
      <p>
        "make it obvious, make it attractive, make it easy, make it satisfying"
      </p>
      <p>"start by doing it badly, but do it"</p>
      <p>
        "you do not rise to the level of your goals, you fall to the levels of
        your systems"
      </p>
      <p>"competence is highly dependent on context"</p>
      <p>"work expands so as to fill the time available for its completion"</p>
      <p>"our brain is for having ideas, not storing them"</p>
      <p>"it’s not about the destination, it’s about the journey"</p>
      <p>"pace yourself and improve your pace"</p>
      <p>"life is both a marathon and a race"</p>
      <p>"time is the greatest editor"</p>
      <p>
        "we should always allow some time to elapse, for time discloses the
        truth"
      </p>
      <p>"maximize desirables and minimize undesirables"</p>
    </i>
  )
}

export default Quotes
