import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  width: 60vw;
  justify-content: space-between;
  height: 30px;
`
const Input = styled.input`
  border: 1px solid palevioletred;
  padding: 0.2em;
  width: 100%;
`
const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 0.6em;
  border: 2px solid palevioletred;
`
const ListHeader = styled.h1`
  font-size: 1.5em;
`
const App = () => (
  <Container>
    <Input />
    <Button primary>Submit</Button>
  </Container>
)

export default App
