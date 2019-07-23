import React from "react"
import styled from 'styled-components'

/* Declare constants for the named elements */
const CardContainer = styled.div`
padding: 30px;
border-radius: 10px;
box-shadow: 0px 0px 15px rgba(0,0,0,0.15);
width: 300px;
margin: 100px auto;
text-align: left;
`

const CardTitle = styled.h3`
font-size: 40px;
color: #e7e7e7;
margin-bottom: 0;
margin-top: 10px;
`
const CardDesc = styled.p`
font-size: 18px;
margin-top: 10px;
`

const Card = () => (
  <CardContainer>
    <CardTitle>Card title</CardTitle>
    <CardDesc>This is the text which gives meaning to the card</CardDesc>
  </CardContainer>
)

export default Card