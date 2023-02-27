// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const login = props => {
  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }
  const setCookies = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      setCookies(data.jwt_token)
    }
  }
  return (
    <div>
      <h1 className="heading">Please Login</h1>
      <button className="button" type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default login
