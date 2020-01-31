import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 0.5em;
  border: 2px solid palevioletred;
`

export const FullButton = styled.button`
  margin-top: 20px;
  background: palevioletred;
  color: white;
  width: 400px;
  height: 30px;
  border: 2px solid palevioletred;
`
