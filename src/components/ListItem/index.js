import React from 'react'
import styled from 'styled-components'
import CheckBox from '../../components/CheckBox'

const Container = styled.div`
  margin-top: 5px;
  display: block;
  position: relative;
`
const Item = styled.span`
  font-size: 14px;
  margin-left: 8px;
`
const RemoveButton = styled.span`
  margin-left: 10px;
  font-size: 10px;
  color: red;
  cursor: pointer;
`

const ListItem = ({ title, removeItem, id, toggleComplete, complete }) => {
  return (
    <Container>
      <CheckBox
        toggleComplete={toggleComplete}
        complete={complete}
        type="checkbox"
        name="complete"
        id={id}
      />
      <Item>{title}</Item>
      <RemoveButton onClick={() => removeItem(id)}>Remove</RemoveButton>
    </Container>
  )
}

export default ListItem
