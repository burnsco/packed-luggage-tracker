import React, { useState, useEffect } from 'react'
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

const Counter = () => {
  const [totalSeconds, setTotalSeconds] = useState(480)

  useEffect(() => {
    const tick = () => {
      if (totalSeconds !== 0) {
        setTotalSeconds(totalSeconds - 1)
      }
      if (totalSeconds === 0) alert('your ride is here!')
    }

    let intervalTimer = setInterval(() => tick(), 1000)

    return () => {
      clearInterval(intervalTimer)
    }
  })

  return (
    <Container>
      <Timer>
        The Lyft will be here in about {Math.floor(totalSeconds / 60)} minute(s)
        and {Math.floor(totalSeconds % 60)} second(s)
      </Timer>
    </Container>
  )
}

export default Counter
