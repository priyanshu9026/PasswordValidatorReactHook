import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`

export const CardContainer = styled.div`
  background: #383a4e;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`

export const PasswordHeading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: Roboto;
  color: #fff;
`

export const PasswordDescription = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  color: #fff;
  margin-bottom: 1rem;
`

export const InputElement = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`

export const ErrorMsg = styled.p`
  font-family: Roboto;
  color: #ef4444;
  font-size: 0.875rem;
`
