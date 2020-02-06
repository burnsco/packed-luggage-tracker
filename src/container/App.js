import React, { Component } from 'react'
import LuggageTracker from './LuggageTracker'

class App extends Component {
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
    if (this.state.input !== '') {
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
      <LuggageTracker
        input={this.state.input}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        packedItems={packedItems}
        unpackedItems={unpackedItems}
        removeItem={this.removeItem}
        togglePacked={this.togglePacked}
        toggleAll={this.toggleAll}
      />
    )
  }
}

export default App
