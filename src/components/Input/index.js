import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 30px;
`
const Input = styled.input`
  border: none;
  background: papayawhip;
  padding: 0.2em;
  width: 100%;

  &:focus {
    border: none;
  }
`
const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 0.8em;
  border: 2px solid palevioletred;
`
const ListHeader = styled.h1`
  font-size: 1.5em;
`
const AddItem = ({ withButton }) => (
  <Container>
    <Input />
    {withButton && <Button primary>Submit</Button>}
  </Container>
)

export default AddItem
