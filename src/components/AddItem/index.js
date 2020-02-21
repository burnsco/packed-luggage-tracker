import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
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
const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 0.8em;
  border: 2px solid palevioletred;
`

const AddItem = ({ handleChange, handleSubmit, input }) => (
  <Container>
    <CustomInput value={input} onChange={e => handleChange(e)} />
    <Button primary onClick={() => handleSubmit()}>
      {' '}
      SUBMIT{' '}
    </Button>
  </Container>
)

export default AddItem
