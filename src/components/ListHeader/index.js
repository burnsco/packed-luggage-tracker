import React from 'react'
import styled from 'styled-components'

const CustomHeader = styled.h1`
  font-size: 1.5em;
`

const ListHeader = ({ title, count }) => (
  <CustomHeader>
    {title} ({count})
  </CustomHeader>
)

export default React.memo(ListHeader)
