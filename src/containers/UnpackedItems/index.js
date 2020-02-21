import React from 'react'
import ListHeader from '../../components/ListHeader'
import ListItem from '../../components/ListItem'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectUnpackedItems,
  selectUnpackedItemsCount
} from '../../redux/selectors'
import { Container } from './styles'

const UnpackedItems = ({ unpackedItems, unpackedItemsCount }) => {
  return (
    <Container>
      <ListHeader count={unpackedItemsCount} title="Unpacked Items" />
      {unpackedItems.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  unpackedItems: selectUnpackedItems,
  unpackedItemsCount: selectUnpackedItemsCount
})

export default connect(mapStateToProps)(UnpackedItems)
