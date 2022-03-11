import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { useState } from 'react'
const SignIn = ({handleChangeUserName}) => {
  const [user, setUser] = useState('')
  const responseFacebook = (response) => {
    setUser(response.name)
    handleChangeUserName(response.name)
  }
  return (
    <div className="sign-in--container">
      <FacebookLogin
        appId="1468927633504164"
        autoLoad={false}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook} />
      <h1>{user}</h1>
    </div>
  )
}

export default SignIn
