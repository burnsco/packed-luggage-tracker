import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { MarkAllButton } from '../components/MarkAllButton'
import ListItem from '../components/ListItem'
import ListHeader from '../components/ListHeader'
import AddItem from '../components/AddItem'
import Counter from '../components/Counter'
import { toggleAll } from '../redux/actions'
import {
  selectUnpackedItems,
  selectPackedItems,
  selectPackedItemsCount,
  selectUnpackedItemsCount
} from '../redux/selectors'

const LuggageTracker = ({
  unpackedItems,
  packedItems,
  unpackedItemsCount,
  packedItemsCount,
  toggleAll
}) => {
  return (
    <>
      <AddItem />
      <Counter />
      <ListHeader count={unpackedItemsCount} title="Unpacked Items" />
      {unpackedItems.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
      <ListHeader count={packedItemsCount} title="Packed Items" />
      {packedItems.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
      <MarkAllButton onClick={() => toggleAll()}>
        Mark All As Unpacked
      </MarkAllButton>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  unpackedItems: selectUnpackedItems,
  packedItems: selectPackedItems,
  unpackedItemsCount: selectUnpackedItemsCount,
  packedItemsCount: selectPackedItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleAll: () => dispatch(toggleAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(LuggageTracker)
