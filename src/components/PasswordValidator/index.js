// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  PasswordHeading,
  PasswordDescription,
  InputElement,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(
    'Your password must be at least 8 characters',
  )

  const validatePassword = inputPassword => {
    if (inputPassword.length >= 8) {
      setError('')
    } else {
      setError('Your password must be at least 8 characters')
    }
  }

  const handlePasswordChange = event => {
    const newPassword = event.target.value
    setPassword(newPassword)
    validatePassword(newPassword)
  }
  return (
    <MainContainer>
      <CardContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <PasswordDescription>
          Check how strong and secure is your password
        </PasswordDescription>
        <InputElement
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </CardContainer>
    </MainContainer>
  )
}
export default PasswordValidator
