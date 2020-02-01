import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 5px;
  border: 1px dotted grey;
  width: 400px;
  background: lightpink;
  height: 22px;
  font-size: 12px;
`
const Timer = styled.div`
  border: none;

  padding: 0.2em;
  width: 100%;

  &:focus {
    border: none;
  }
`

class Counter extends React.Component {
  state = {
    minutes: 8,
    seconds: 59
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(state => ({ count: state.count - 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  // 1) seconds total -> divide into minutes and seconds
  // 2) minutes and seconds separate

  render() {
    let minutes = this.state.count / 60
    let seconds = this.state.count / 1000
    return (
      <Container>
        <Timer>
          The Lyft will be here in about {this.state.minutes} minute(s) and{' '}
          {this.state.seconds} second(s)
        </Timer>
      </Container>
    )
  }
}

export default Counter
