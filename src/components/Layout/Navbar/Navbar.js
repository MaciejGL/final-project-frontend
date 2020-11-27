import React from 'react';
import { ExitToApp } from '@material-ui/icons';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import * as actions from '../../../redux/actions/auth';

const Navbar = (props) => {
  const { isAuth } = props;

  const activeStyles = {
    color: '#f77f00',
  };

  const renderAuth = () => {
    if (isAuth) {
      return (
        <>
          <li>
            <NavLink activeStyle={activeStyles} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyles} to="/account">
              Account
            </NavLink>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <NavLink activeStyle={activeStyles} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyles} to="/signup">
            Signup
          </NavLink>
        </li>
      </>
    );
  };

  return (
    <div className={styles.navbarContainer}>
      <ul>
        {renderAuth()}
        <li>
          <NavLink activeStyle={activeStyles} to="/about">
            About
          </NavLink>
        </li>
        {isAuth && (
          <li>
            <button className={styles.exitToApp} onClick={props.logout}>
              {<ExitToApp />}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

const mapStateToPros = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Navbar);
