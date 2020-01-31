import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input'
import ListItem from '../components/ListItem'
import AddItem from '../components/AddItem'

const MarkButton = styled.button`
  margin-top: 20px;
  background: palevioletred;
  color: white;
  width: 400px;
  height: 30px;
  border: 2px solid palevioletred;
`
class App extends React.Component {
  state = {
    input: '',
    items: [
      { id: 1, title: 'Phone', packed: false },
      { id: 2, title: 'Computer', packed: false },
      { id: 3, title: 'Jeans', packed: false },
      { id: 4, title: 'Toothbrush', packed: false },
      { id: 5, title: 'Socks', packed: false },
      { id: 6, title: 'Underwear', packed: false }
    ]
  }
  handleChange = e => {
    this.setState({ input: e.target.value })
  }
  handleSubmit = () => {
    let items = [
      ...this.state.items,
      { id: this.state.items.length, title: this.state.input, packed: false }
    ]
    this.setState({ items })
  }
  render() {
    return (
      <>
        <AddItem />
        <h2>Unpacked Items (4)</h2>
        <Input />
        <ListItem />
        <h2>Packed Items (2)</h2>
        <Input />
        <ListItem />
        <MarkButton>Mark All As Unpacked</MarkButton>
      </>
    )
  }
}

export default App
