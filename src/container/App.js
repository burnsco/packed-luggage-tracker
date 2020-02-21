import React, { useState, useReducer } from 'react'
import TodoList from './TodoList'
import uuidv1 from 'uuid/v1'
import { INITIAL_STATE, filterReducer } from '../data'

function App() {
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL')
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
          id: uuidv1(),
          title: input,
          complete: false
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

  const toggleComplete = id => {
    let itemz = [...items]
    let index = items.findIndex(item => item.id === id)
    items[index].complete = !items[index].complete
    setItems(itemz)
  }

  const toggleAll = () => {
    let itemz = [...items]
    items.forEach(item => (item.complete = false))
    setItems(itemz)
  }

  const handleShowAll = () => {
    dispatchFilter({ type: 'SHOW_ALL' })
  }
  const handleShowComplete = () => {
    dispatchFilter({ type: 'SHOW_COMPLETE' })
  }
  const handleShowIncomplete = () => {
    dispatchFilter({ type: 'SHOW_INCOMPLETE' })
  }

  return (
    <TodoList
      input={input}
      items={items}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      removeItem={removeItem}
      toggleComplete={toggleComplete}
      toggleAll={toggleAll}
      handleShowAll={handleShowAll}
      handleShowComplete={handleShowComplete}
      handleShowIncomplete={handleShowIncomplete}
    />
  )
}

export default App
