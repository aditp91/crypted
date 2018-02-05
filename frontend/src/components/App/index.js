import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Nav} from './Nav';
import NotFound from '../NotFound';
import Dashboard from '../Dashboard';
// import Login from '../Login';
import './style.css';

export default class App extends Component {
  constructor (props) {
    super();
    this.state = {
      currentUserId: "",
      currentUsername: "",
      currentRole: "unauthorized"
    };

    this.changeCurrentUser.bind(this);
  };

  changeCurrentUser(currentUserId, currentUsername, currentRole) {
    this.setState({ currentUserId, currentUsername, currentRole});
  }
  
  render(props) {
    const { currentUserId, currentUsername, currentRole} = this.state;

    return (
      <BrowserRouter>
        <div className="wrapper">
            <Nav userId={currentUserId} username={currentUsername} role={currentRole}/>
            <Switch>
              <Route exact path="/" component={(props)=><Dashboard userId={currentUserId} role={currentRole} {...props} />} />
              <Route component={NotFound} />
              {/* <Route path="/login" component={(props)=><Login changeCurrentUser={this.changeCurrentUser.bind(this)} {...props} />} /> */}
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
};