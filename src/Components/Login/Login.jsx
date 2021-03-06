import React from 'react';
import Style from './Login.module.css';
import {Field, reduxForm } from 'redux-form'

const onSubmit = (formData) =>{
  console.log(formData);
}
const Login = (props) => {
  console.log('rerender')
  return (
   
    <div className = {Style.LoginFormWrapper}>
      <h2>Please, enter your login</h2>
      <LoginReduxForm onSubmit = {onSubmit} />
    </div>
  )
}
const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'}name = {'login'} component={'input'} />
      </div>
      <div>
        <Field placeholder={"Password"}name = {'password'} component={'input'}/>
      </div>
      <div>
        <Field type={'checkbox'} name = {'rememberMe'} component={'input'}/>remember me
    </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}
const LoginReduxForm  = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)


export default Login;