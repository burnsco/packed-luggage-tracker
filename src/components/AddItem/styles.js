import styled from '@xstyled/styled-components'

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 30px;
`
export const CustomInput = styled.input`
  border: none;
  background: papayawhip;
  padding: 0.2em;
  width: 100%;

  &:focus {
    border: none;
  }
`
export const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 0.8em;
  border: 2px solid palevioletred;
`
