import React, { useState } from 'react'
import Input from '../../components/Input'
import ListItem from '../../components/ListItem'
import ListHeader from '../../components/ListHeader'

const List = ({ unpackedItems, packedItems, removeItem, togglePacked }) => {
  const [filterOne, setFilterOne] = useState('')
  const [filterTwo, setFilterTwo] = useState('')

  return (
    <>
      <ListHeader title="Unpacked Items" items={unpackedItems.length} />
      <Input />
      {unpackedItems.map(item => (
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
      <Input />
      {packedItems.map(item => (
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
