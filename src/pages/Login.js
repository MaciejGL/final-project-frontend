import React, { useState } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

import checkValidity from '../utils/formValidation';
import * as authActions from '../redux/actions/auth';
import * as errorsActions from '../redux/actions/errors';

const Login = (props) => {
  const [formElements, setFormElements] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your Email',
        name: 'email',
        id: 'email',
      },
      label: 'Email',
      value: '',
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Passwrod',
        name: 'password',
        id: 'password',
      },
      label: 'Password',
      value: '',
    },
  });

  // Submit:
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let key in formElements) {
      formData[key] = formElements[key].value;
    }

    const errors = checkValidity(formData, 'login');

    if (Object.keys(errors).length !== 0) {
      return props.addFormError('Invalid email or password. Please try again.');
    }
    props.cleanFormError();
    props.login(formData);
  };

  // Handle change value
  const updateState = (identifier, targetToUpdate, value) => {
    setFormElements((prevState) => ({
      ...prevState,
      [identifier]: {
        ...prevState[identifier],
        [targetToUpdate]: value,
      },
    }));
  };

  const changedHandler = (e) => {
    updateState(e.target.name, 'value', e.target.value);
  };

  // Map over object to create array
  const formElementsArray = [];

  for (let key in formElements) {
    formElementsArray.push({
      id: key,
      config: formElements[key],
    });
  }

  return (
    <div>
      <Layout>
        <h1>Login</h1>
        {props.errorMessage && <span>{props.errorMessage}</span>}
        <form onSubmit={submitHandler}>
          {formElementsArray.map((el) => (
            <Input
              key={el.id}
              elementType={el.config.elementType}
              elementConfig={el.config.elementConfig}
              value={el.config.value}
              changed={changedHandler}
              label={el.config.label}
              invalid={el.config.error}
            />
          ))}
          <Button type="submit" action={submitHandler} actionStyle="create">
            Login
          </Button>
        </form>
      </Layout>
    </div>
  );
};
const mapStateToProps = (state) => ({
  errorMessage: state.authReducer.error,
});
const mapDispatchToProps = (dispatch) => ({
  login: (loginCredentials) => dispatch(authActions.login(loginCredentials)),
  addFormError: (message) => dispatch(errorsActions.addFormError(message)),
  cleanFormError: () => dispatch(errorsActions.cleanFormError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
