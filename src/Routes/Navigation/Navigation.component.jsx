// Constants
import { ReactComponent as BrandLogo } from "../../Assets/clothes-svgrepo-com.svg";
// Styles
import "./navigation.styles.scss";
// Library
import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// context
import { UserContext } from "../../context/user.context";
import { userSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../Components/CartIcon/CartIcon.component";
import { CartContext } from "../../context/cart.context";
import CartDropDown from "../../Components/CartDropDown/CartDropDown.component";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <div>Logo</div> */}
          <BrandLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/shop">
            CONTACT US
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={userSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
