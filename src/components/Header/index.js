// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/About">
      <li>About</li>
    </Link>
  </ul>
)

export default Header
