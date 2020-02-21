import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 30px;
`
const CustomInput = styled.input`
  border: 1px solid grey;
  background: papayawhip;
  padding: 0.2em;
  width: 100%;
  &:focus {
    border: none;
  }
`

const FilterItem = ({ handleChange, value }) => (
  <Container>
    <CustomInput onChange={e => handleChange(e)} value={value} />
  </Container>
)

export default FilterItem
