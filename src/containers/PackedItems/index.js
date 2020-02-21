import React from 'react'
import ListHeader from '../../components/ListHeader'
import ListItem from '../../components/ListItem'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectPackedItems,
  selectPackedItemsCount
} from '../../redux/selectors'
import { Container } from './styles'

const PackedItems = ({ packedItems, packedItemsCount }) => {
  return (
    <Container>
      <ListHeader count={packedItemsCount} title="Packed Items" />
      {packedItems.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  packedItems: selectPackedItems,
  packedItemsCount: selectPackedItemsCount
})

export default connect(mapStateToProps)(PackedItems)
