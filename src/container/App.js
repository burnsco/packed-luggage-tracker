import React, { Component } from 'react'
import styled from 'styled-components'
import Input from '../components/Input'
import ListItem from '../components/ListItem'

const ListHeader = styled.h2`
  font-size: 1.5em;
`
const MarkButton = styled.button`
  margin-top: 20px;
  background: palevioletred;
  color: white;
  width: 400px;
  height: 30px;
  border: 2px solid palevioletred;
`
class App extends Component {
  state = {
    input: '',
    items: [{ id: 1, title: 'Pants', packed: false }]
  }
  render() {
    return (
      <>
        <Input withButton />
        <ListHeader>Unpacked Items (4)</ListHeader>
        <Input />
        <ListItem />
        <ListHeader>Packed Items (2)</ListHeader>
        <Input />
        <ListItem />
        <MarkButton>Mark All As Unpacked</MarkButton>
      </>
    )
  }
}

export default App
