import React, { Component } from 'react'
// import { Button, Input } from './Utils/Utils'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    console.log('login form submitted')
    fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        user_name: user_name.value,
        password: password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
        .then(res => {
          if (res.ok) {
            console.log("sign-in successful:", res);
            return res;
            //return res.json(); // for some reason this isn't working on successful sign-in
          }
          throw new Error(res.statusText);
        })
        .then(data => {
          console.log("sign in successful", data)
          user_name.value = ''
          password.value = ''
          this.props.onLoginSuccess()
        })
        .catch(err => {
          alert("Sign in failed.");
          console.error("Sign in failed:", err);
        })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitBasicAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input className="Input"
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input className="Input"
            name='password'
            type='password'
            id='LoginForm__password'>
          </input>
        </div>
        <button className="Button" type='submit'>
          Login
        </button>
      </form>
    )
  }
}