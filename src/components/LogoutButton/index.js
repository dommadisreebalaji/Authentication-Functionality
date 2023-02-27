// Write your JS code here
import Cookies from 'js-cookie'
import './index.css'
import {withRouter} from 'react-router-dom'

const logoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button className="button" type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default withRouter(logoutButton)
