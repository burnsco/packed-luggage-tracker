import React, { useState } from 'react'
import ListItem from '../../components/ListItem'
import ListHeader from '../../components/ListHeader'
import FilterItem from '../../components/FilterItem'

const List = ({ unpackedItems, packedItems, removeItem, togglePacked }) => {
  const [filterOne, setFilterOne] = useState('')
  const [filterTwo, setFilterTwo] = useState('')
  const handleOne = e => setFilterOne(e.target.value)
  const handleTwo = e => setFilterTwo(e.target.value)
  let filteredUnpackedItems = unpackedItems.filter(item =>
    item.title.toLowerCase().includes(filterOne.toLowerCase())
  )
  let filteredPackedItems = packedItems.filter(item =>
    item.title.toLowerCase().includes(filterTwo.toLowerCase())
  )

  return (
    <>
      <ListHeader title="Unpacked Items" items={unpackedItems.length} />
      <FilterItem handleChange={handleOne} value={filterOne} />
      {filteredUnpackedItems.map(item => (
        <ListItem
          title={item.title}
          key={item.id}
          packed={item.packed}
          togglePacked={togglePacked}
          removeItem={removeItem}
          id={item.id}
        />
      ))}
      <ListHeader title="Packed Items" items={packedItems.length} />
      <FilterItem handleChange={handleTwo} value={filterTwo} />
      {filteredPackedItems.map(item => (
        <ListItem
          title={item.title}
          key={item.id}
          packed={item.packed}
          togglePacked={togglePacked}
          removeItem={removeItem}
          id={item.id}
        />
      ))}
    </>
  )
}

export default List
