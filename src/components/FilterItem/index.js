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
  border: none;
  background: papayawhip;
  padding: 0.2em;
  width: 100%;
  &:focus {
    border: none;
  }
`

const FilterItem = ({ handleChange }) => (
  <Container>
    <CustomInput />
  </Container>
)

export default FilterItem
