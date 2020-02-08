import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { addItemToList } from '../../redux/actions'

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 30px;
`
const CustomInput = styled.input`
  border: none;
  background: papayawhip;
  padding: 0.2em;
  width: 100%;

  &:focus {
    border: none;
  }
`
const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 0.8em;
  border: 2px solid palevioletred;
`

const AddItem = ({ handleChange, handleSubmit, input, item }) => (
  <Container>
    <CustomInput value={input} onChange={e => handleChange(e)} />
    <Button primary onClick={() => addItemToList(item)}>
      {' '}
      SUBMIT{' '}
    </Button>
  </Container>
)

const mapDispatchToProps = dispatch => ({
  addItemToList: item => dispatch(addItemToList(item))
})

export default connect(null, mapDispatchToProps)(AddItem)
