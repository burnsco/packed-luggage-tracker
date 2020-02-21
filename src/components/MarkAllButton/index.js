import styled from 'styled-components'
import React from 'react'

export const MarkAllButton = styled.button`
  margin-top: 20px;
  background: palevioletred;
  color: white;
  width: 400px;
  height: 30px;
  border: 2px solid palevioletred;
`

export const MarkAll = ({ toggleAll }) => (
  <MarkAllButton>Mark All Unpacked</MarkAllButton>
)
