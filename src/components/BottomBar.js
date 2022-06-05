import React, { useContext, useState } from "react"
import { ProductsContext } from '../App';

const BottomBar = () => {
  const context = useContext(ProductsContext);
  const [isMenuVisible, setMenuVisibility] = useState(false)

  const getTotalCount = () => {
    return context.state.cart.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
  }

  const getTotalPrice = () => {
    const price = context.state.cart.reduce((acc, item) => {
      return acc + (item.price * item.count);
    }, 0);

    return parseInt(price).toFixed(2);
  }

  return(
    <div className="bottom-bar">
      <div onClick={() => setMenuVisibility(true)} className="bottom-bar__menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
      <div className="bottom-bar__cart">
        <div className="bottom-bar__cart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M4.68896 22.1559C4.68896 21.13 5.50433 20.2995 6.51154 20.2995C7.50677 20.2995 8.32213 21.13 8.32213 22.1559C8.32213 23.1695 7.50677 24 6.51154 24C5.50433 24 4.68896 23.1695 4.68896 22.1559ZM18.1784 22.1559C18.1784 21.13 18.9938 20.2995 20.001 20.2995C20.9962 20.2995 21.8116 21.13 21.8116 22.1559C21.8116 23.1695 20.9962 24 20.001 24C18.9938 24 18.1784 23.1695 18.1784 22.1559Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M21.8119 4.7011C22.5433 4.7011 23.0229 4.95757 23.5026 5.51935C23.9822 6.08114 24.0661 6.88718 23.9582 7.61873L22.8191 15.6303C22.6033 17.1703 21.3083 18.3049 19.7855 18.3049H6.70367C5.10891 18.3049 3.78994 17.0592 3.65804 15.4483L2.5549 2.1352L0.744311 1.81766C0.264684 1.73217 -0.0710541 1.25588 0.0128805 0.767365C0.0968151 0.266642 0.564451 -0.0631028 1.05607 0.0101738L3.91584 0.449833C4.32352 0.524331 4.62329 0.865067 4.65926 1.2803L4.88708 4.01596C4.92305 4.40799 5.23481 4.7011 5.61851 4.7011H21.8119ZM14.5455 11.0505H17.867C18.3706 11.0505 18.7663 10.6353 18.7663 10.1346C18.7663 9.62163 18.3706 9.21861 17.867 9.21861H14.5455C14.0419 9.21861 13.6462 9.62163 13.6462 10.1346C13.6462 10.6353 14.0419 11.0505 14.5455 11.0505Z" fill="white"/>
          </svg>
          <p className="bottom-bar__cart-icon-text">Sepetim</p>
        </div>
        <div className="bottom-bar__cart-total">
          <p className="bottom-bar__cart-total-text">Toplam</p>
          <p className="bottom-bar__cart-total-price">{getTotalPrice()} TL</p>
        </div>
        { context.state.cart.length ? <div className="bottom-bar__badge"> {getTotalCount()} </div> : null }
      </div>
      { isMenuVisible ? <div className="bottom-bar__dropdown-menu">
        <div onClick={() => setMenuVisibility(false)} className="bottom-bar__dropdown-menu-close-button" />
        <div className="bottom-bar__dropdown-menu-item">
        <svg className="bottom-bar__dropdown-icon" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.64373 18.7821V15.7152C6.64372 14.9381 7.27567 14.3067 8.05844 14.3018H10.9326C11.7189 14.3018 12.3563 14.9346 12.3563 15.7152V18.7732C12.3562 19.4473 12.904 19.9951 13.5829 20H15.5438C16.4596 20.0023 17.3388 19.6428 17.9872 19.0007C18.6356 18.3586 19 17.4868 19 16.5775V7.86585C19 7.13139 18.6721 6.43471 18.1046 5.9635L11.443 0.674268C10.2785 -0.250877 8.61537 -0.220992 7.48539 0.745384L0.967012 5.9635C0.372741 6.42082 0.0175523 7.11956 0 7.86585V16.5686C0 18.4637 1.54738 20 3.45617 20H5.37229C5.69917 20.0023 6.01349 19.8751 6.24547 19.6464C6.47746 19.4178 6.60793 19.1067 6.60792 18.7821H6.64373Z" fill="#0A99C6"/>
        </svg>
          Adreslerim
        </div>
        <div className="bottom-bar__dropdown-menu-item">
          <svg className="bottom-bar__dropdown-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M3.90747 18.4591C3.90747 17.6019 4.58694 16.908 5.42629 16.908C6.25564 16.908 6.93511 17.6019 6.93511 18.4591C6.93511 19.3061 6.25564 20 5.42629 20C4.58694 20 3.90747 19.3061 3.90747 18.4591ZM15.1487 18.4591C15.1487 17.6019 15.8282 16.908 16.6675 16.908C17.4969 16.908 18.1764 17.6019 18.1764 18.4591C18.1764 19.3061 17.4969 20 16.6675 20C15.8282 20 15.1487 19.3061 15.1487 18.4591Z" fill="#0A99C6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1766 3.92812C18.7861 3.92812 19.1858 4.14242 19.5855 4.61184C19.9852 5.08125 20.0551 5.75476 19.9652 6.36602L19.0159 13.0603C18.8361 14.3471 17.7569 15.2951 16.4879 15.2951H5.58639C4.25742 15.2951 3.15828 14.2542 3.04837 12.9082L2.12908 1.78412L0.620259 1.5188C0.22057 1.44736 -0.0592117 1.04938 0.0107338 0.641192C0.0806793 0.222799 0.470376 -0.0527271 0.880056 0.008501L3.2632 0.37587C3.60293 0.438118 3.85274 0.722829 3.88272 1.06979L4.07257 3.35564C4.10254 3.68321 4.36234 3.92812 4.68209 3.92812H18.1766ZM12.1213 9.23354H14.8891C15.3088 9.23354 15.6385 8.88658 15.6385 8.46819C15.6385 8.03959 15.3088 7.70284 14.8891 7.70284H12.1213C11.7016 7.70284 11.3719 8.03959 11.3719 8.46819C11.3719 8.88658 11.7016 9.23354 12.1213 9.23354Z" fill="#0A99C6"/>
          </svg>
          Önceki Siparişlerim
        </div>
        <div className="bottom-bar__dropdown-menu-item">
          <svg className="bottom-bar__dropdown-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M14.34 0H5.67C2.28 0 0 2.38 0 5.92V14.09C0 17.62 2.28 20 5.67 20H14.34C17.73 20 20 17.62 20 14.09V5.92C20 2.38 17.73 0 14.34 0" fill="#0A99C6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.12475 6.18951C9.12475 6.67151 9.51575 7.06451 9.99475 7.06451C10.4878 7.06451 10.8798 6.67151 10.8798 6.18951C10.8798 5.70751 10.4878 5.31451 10.0048 5.31451C9.51975 5.31451 9.12475 5.70751 9.12475 6.18951ZM10.8698 9.36231C10.8698 8.88031 10.4768 8.48731 9.99475 8.48731C9.51275 8.48731 9.11975 8.88031 9.11975 9.36231V13.7823C9.11975 14.2643 9.51275 14.6573 9.99475 14.6573C10.4768 14.6573 10.8698 14.2643 10.8698 13.7823V9.36231Z" fill="#0A99C6"/>
          </svg>
          İletişim
        </div>
      </div> : null }
    </div>
  )
}

export default BottomBar;
