import React from 'react';
import {
  object,
} from 'prop-types';
import Button from 'Common/Button';
import TextField from 'Common/TextField';
import classes from './index.less';

class Login extends React.Component {
  static propTypes = {
    history: object.isRequired,
  };

  state = {
    password: '',
    userName: '',
  };

  handleClick = () => {
    const {
      history,
    } = this.props;

    const {
      password,
      userName,
    } = this.state;
  
    fetch('http://localhost:3000/login', {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      method: 'POST',
      mode: 'cors',
      // body: `password=${password}&userName=${userName}`,
      body: JSON.stringify({
        password,
        userName,
      }),
    })
      .then((response) => {
        // console.log(response);
        history.push('/home');
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

  handleUsernameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  }

  render() {
    return (
      <div className={classes.root}>
        <div className={classes.loginBox}>
          <TextField
            label="Username"
            onChange={this.handleUsernameChange}
          />
          <TextField
            label="Password"
            onChange={this.handlePasswordChange}
            type="password"
          />
          <Button
            name="登 录"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  } 
}

export default Login;
