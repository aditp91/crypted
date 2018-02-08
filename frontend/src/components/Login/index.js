import React, {Component } from 'react';
import axios from 'axios';

// import apiConstants from '../../shared/api.constants.js';

export default class Login extends Component {
  constructor (props) {
    super();
    this.state = {
        username: "",
        password: "",
        role: ""
    };

    this.validateSubmit.bind(this);
  };

  handleUserInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateSubmit (e) {
    e.preventDefault();

    const {username, password} = this.state;
    
    axios.get('/api/authenticate/'+username+'/'+password)
      .then(res => {
        const user = res.data[0] ? res.data[0] : null;

        if (user) {
          this.setState({ username, password, role: user.Role });
          this.props.changeCurrentUser(user.ID, user.Username, user.Role);
          this.props.history.push('/');
        } else {
          alert("Try Again");
        }
      });
  }

  render() {
    const {username, password} = this.state;

    return (
      <div>
          <section id="wrapper" className="login-register">
              <div className="login-box">
                  <div className="white-box">
                      <form className="form-horizontal form-material" id="loginform" action="index.html">
                          <h3 className="box-title m-b-20">Sign In</h3>
                          <div className="form-group ">
                              <div className="col-xs-12">
                                  <input className="form-control" type="text" required="" placeholder="Username"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <div className="col-xs-12">
                                  <input className="form-control" type="password" required="" placeholder="Password"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <div className="col-md-12">
                                  <div className="checkbox checkbox-primary pull-left p-t-0">
                                      <input id="checkbox-signup" type="checkbox"/>
                                      <label for="checkbox-signup"> Remember me </label>
                                  </div>
                                  <a href="javascript:void(0)" id="to-recover" className="text-dark pull-right"><i className="fa fa-lock m-r-5"></i> Forgot pwd?</a> </div>
                          </div>
                          <div className="form-group text-center m-t-20">
                              <div className="col-xs-12">
                                  <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
                              </div>
                          </div>
                          <div className="form-group m-b-0">
                              <div className="col-sm-12 text-center">
                                  <p>Don't have an account? <a href="register.html" className="text-primary m-l-5"><b>Sign Up</b></a></p>
                              </div>
                          </div>
                      </form>
                      <form className="form-horizontal" id="recoverform" action="index.html">
                          <div className="form-group ">
                              <div className="col-xs-12">
                                  <h3>Recover Password</h3>
                                  <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
                              </div>
                          </div>
                          <div className="form-group ">
                              <div className="col-xs-12">
                                  <input className="form-control" type="text" required="" placeholder="Email"/>
                              </div>
                          </div>
                          <div className="form-group text-center m-t-20">
                              <div className="col-xs-12">
                                  <button className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </section>

          <div className="login">
            <form onSubmit={this.validateSubmit.bind(this)}>
              <div className="form-group">
                <input type="username" className="form-control" name="username" placeholder="Username" onChange={(e) => this.handleUserInput(e)}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={(e) => this.handleUserInput(e)}/>
              </div>
              <button type="submit" className="btn btn-primary" disabled={!username || !password}>Sign In</button>
            </form>
          </div>
      </div>
    );
  }
};