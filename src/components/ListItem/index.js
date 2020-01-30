import React from 'react'
import styled from 'styled-components'

const Container = styled.label`
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
`

const ListItem = () => {
  return (
    <Container>
      <CheckBox type="checkbox" name="item" id="item" />
      <Item>Pants</Item>
      <RemoveButton>Remove</RemoveButton>
    </Container>
  )
}

export default ListItem
