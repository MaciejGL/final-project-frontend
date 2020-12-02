import React from 'react';
import { ArrowBack, Menu, Close } from '@material-ui/icons';
import { connect } from 'react-redux';

import { NavLink, useHistory } from 'react-router-dom';
import SvgLogo from '../../../images/SvgLogo';
import { useHistory } from 'react-router-dom';


import Logo from '../../shared/Logo/Logo';
import styles from './Navbar.module.css';
import links from './links';
import DrawerBurger from './DrawerBurger/DrawerBurger';
import NavLinks from './NavLinks/NavLinks';
import LoggedInAs from './LoggedInAs/LoggedInAs';
// import Button from '../../Button/Button';

import * as authActions from '../../../redux/actions/auth';
import * as errorActions from '../../../redux/actions/errors';

const Navbar = props => {
  const history = useHistory();

  const goToPrevPage = () => {
    Object.keys(props.formErrors).length !== 0 && props.cleanFormError('');
    history.goBack();
  };

  return (
    <div className={styles.navbarContainer}>
      <LoggedInAs />
      <Logo comp="Navbar" />
      <nav className={styles.DesktopOnly}>
        <NavLinks links={links} />
      </nav>
      <div className={styles.burger} onClick={props.toggleDrawer}>
        {props.open ? <Close /> : <Menu />}
      </div>
    </div>
  );
};

const mapStateToPros = state => {
  return {
    isAuth: state.authReducer.isAuth,
    session: state.sessionReducer,
    formErrors: state.errorReducer.formErrors,
    user: state.authReducer.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(authActions.logout()),
    cleanFormError: () => dispatch(errorActions.cleanFormError()),
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Navbar);
