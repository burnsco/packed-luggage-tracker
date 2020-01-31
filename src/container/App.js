import React from 'react'
import styled from 'styled-components'
import AddItem from '../components/AddItem'
import List from '../container/List'

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
      { id: 3, title: 'Jeans', packed: true },
      { id: 4, title: 'Toothbrush', packed: false },
      { id: 5, title: 'Socks', packed: true },
      { id: 6, title: 'Underwear', packed: false }
    ]
  }

  handleChange = e => {
    this.setState({ input: e.target.value })
  }
  handleSubmit = () => {
    let items = [
      ...this.state.items,
      {
        id: this.state.items.length + 1,
        title: this.state.input,
        packed: false
      }
    ]
    this.setState({ items: items, input: '' })
  }
  removeItem = id => {
    let items = [...this.state.items.filter(item => item.id !== id)]
    this.setState({ items })
  }
  togglePacked = id => {
    let items = [...this.state.items]
    let index = items.findIndex(item => item.id === id)
    items[index].packed = !items[index].packed
    this.setState({ items })
  }
  toggleAll = () => {
    let items = [...this.state.items]
    items.forEach(item => (item.packed = false))
    this.setState({ items })
  }

  render() {
    let unpackedItems = this.state.items.filter(item => !item.packed)
    let packedItems = this.state.items.filter(item => item.packed)

    return (
      <>
        <AddItem
          input={this.state.input}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <List
          packedItems={packedItems}
          unpackedItems={unpackedItems}
          removeItem={this.removeItem}
          togglePacked={this.togglePacked}
        />
        <MarkButton onClick={() => this.toggleAll()}>
          Mark All As Unpacked
        </MarkButton>
      </>
    )
  }
}

export default App
