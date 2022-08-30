import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import UserInfo from '../user-info/user-info';
import React from 'react';
import {logoutAction} from '../../store/api-actions';

function Header(): JSX.Element {
  const isAuth = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);
  const dispatch = useAppDispatch();

  const logout = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth && <UserInfo />}
              <li className="header__nav-item">
                {!isAuth && <div className="header__avatar-wrapper user__avatar-wrapper" />}
                {!isAuth
                  ?
                  <Link to={AppRoute.Login} className="header__nav-link" >
                    <span className="header__signout">Sign in</span>
                  </Link>
                  :
                  <Link
                    to={AppRoute.Login}
                    className="header__nav-link"
                    onClick={(evt) => logout(evt)}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
