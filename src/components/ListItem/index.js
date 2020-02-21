import React from 'react'
import { connect } from 'react-redux'
import CheckBox from '../../components/CheckBox'
import { removeItemFromList, toggleItem } from '../../redux/actions'
import { Container, Item, RemoveButton } from './styles'

const ListItem = ({
  removeItem,
  togglePacked,
  item: { title, id, packed }
}) => {
  return (
    <Container>
      <CheckBox
        togglePacked={togglePacked}
        packed={packed}
        type="checkbox"
        name="packed"
        id={id}
      />
      <Item>{title}</Item>
      <RemoveButton onClick={() => removeItem(id)}>Remove</RemoveButton>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemFromList(id)),
  togglePacked: item => dispatch(toggleItem(item))
})

export default connect(null, mapDispatchToProps)(ListItem)
