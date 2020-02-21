import React from 'react'
import LuggageTracker from './LuggageTracker'
import { useState } from 'react'

let INITIAL_STATE = [
  { id: 1, title: 'Phone', packed: false },
  { id: 2, title: 'Computer', packed: false },
  { id: 3, title: 'Jeans', packed: true },
  { id: 4, title: 'Toothbrush', packed: false },
  { id: 5, title: 'Socks', packed: true },
  { id: 6, title: 'Underwear', packed: false }
]

function App() {
  const [input, setInput] = useState('')
  const [items, setItems] = useState(INITIAL_STATE)

  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleSubmit = () => {
    if (input !== '') {
      let itemz = [
        ...items,
        {
          id: items.length + 1,
          title: input,
          packed: false
        }
      ]
      setInput('')
      setItems(itemz)
    }
  }
  const removeItem = id => {
    let itemz = [...items.filter(item => item.id !== id)]
    setItems(itemz)
  }
  const togglePacked = id => {
    let itemz = [...items]
    let index = items.findIndex(item => item.id === id)
    items[index].packed = !items[index].packed
    setItems(itemz)
  }
  const toggleAll = () => {
    let itemz = [...this.state.items]
    items.forEach(item => (item.packed = false))
    setItems(itemz)
  }

  let unpackedItems = items.filter(item => !item.packed)
  let packedItems = items.filter(item => item.packed)

  return (
    <LuggageTracker
      input={input}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      packedItems={packedItems}
      unpackedItems={unpackedItems}
      removeItem={removeItem}
      togglePacked={togglePacked}
      toggleAll={toggleAll}
    />
  )
}

export default App
