import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 15px;
  display: block;
  position: relative;
`

const CheckBox = styled.input`
  cursor: pointer;
`

const Item = styled.span`
  font-size: 14px;
`

const RemoveButton = styled.span`
  margin-left: 10px;
  font-size: 10px;
  color: red;
  cursor: pointer;
`

const ListItem = ({ title, removeItem, id, togglePacked, packed }) => {
  return (
    <Container>
      <CheckBox
        onChange={() => togglePacked(id)}
        value={packed}
        type="checkbox"
        name="packed"
        id="packed"
      />
      <Item>{title}</Item>
      <RemoveButton onClick={() => removeItem(id)}>Remove</RemoveButton>
    </Container>
  )
}

export default ListItem
