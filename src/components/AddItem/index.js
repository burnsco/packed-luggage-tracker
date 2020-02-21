import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Button, CustomInput } from './styles.js'
import { addItemToList } from '../../redux/actions/index.js'

const AddItem = ({ addItemToList }) => {
  const [input, setInput] = useState('')
  const handleChange = e => setInput(e.target.value)

  return (
    <Container>
      <CustomInput value={input} onChange={e => handleChange(e)} />
      <Button
        primary
        onClick={() => {
          if (input.length > 0) addItemToList(input)
          setInput('')
        }}
      >
        {' '}
        SUBMIT{' '}
      </Button>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToList: input => dispatch(addItemToList(input))
})

export default connect(null, mapDispatchToProps)(AddItem)
