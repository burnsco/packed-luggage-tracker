import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {MarkAllButton} from '../../components/MarkAllButton'
import ListItem from '../../components/ListItem'
import ListHeader from '../../components/ListHeader'
import FilterItem from '../../components/FilterItem'
import AddItem from '../../components/AddItem'
import Counter from '../../components/Counter'

const LuggageTracker = ({
  unpackedItems,
  packedItems,
  removeItem,
  togglePacked,
  input,
  handleSubmit,
  handleChange,
  toggleAll
}) => {
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
      <AddItem
        input={input}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Counter />
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
      <MarkAllButton onClick={() => toggleAll()}>
        Mark All As Unpacked
      </MarkAllButton>
    </>
  )
}
const mapDispatchToProps = createStructuredSelector({
  addItem: () => test,
  removeItem: () => test,
  togglePacked: () => test,
  toggleAllPacked: () => test
})

const mapStateToProps = createStructuredSelector({})

export default connect(mapDispatchToProps, mapStateToProps)(LuggageTracker)
