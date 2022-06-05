import React, { useContext } from "react"
import logo from '../assets/img/logo.png'
import { ProductsContext } from '../App';

const Header = () => {
  const context = useContext(ProductsContext);

  return(
    <div className="header">
      <img src={logo} alt="App logo" />
      <div className="header__tabs">
        <a onClick={() => context.filterBy('ALL') } className={ context.state.filterType === 'ALL' ? 'header__tab active' : 'header__tab'}>Tümü</a>
        <a onClick={() => context.filterBy('CAM') } className={ context.state.filterType === 'CAM' ? 'header__tab active' : 'header__tab'}>Cam Şişe</a>
        <a onClick={() => context.filterBy('PET') } className={ context.state.filterType === 'PET' ? 'header__tab active' : 'header__tab'}>Pet Şişe</a>
      </div>
    </div>
  )
}

export default Header;
