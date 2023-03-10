// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navigation-bar">
          <NavLink id='logo' to='/'>
      <img src={Logo} alt='react-logo'/>
    </NavLink>
    <NavLink to='/burgers'>BURGER SHOP</NavLink>
    </nav>
  )
}

export default Nav