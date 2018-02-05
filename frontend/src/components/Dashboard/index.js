import React, {Component } from 'react';
// import axios from 'axios';

// import apiConstants from '../../shared/api.constants.js';
import Portfolio from './Portfolio';
import './style.css';

export default class Dashboard extends Component {
  constructor (props) {
    super();
    this.state = {
        portfolio: {},
        currencies: [], 
        selectedCurrency: -1
    };
  };

  componentDidMount () {
    // check if app component has an authorized user
    if (this.props.role === 'unauthorized') {
      // this.props.history.push('/login');
      console.log("component did mount and role is unauthorized");
    } 
  }

  render() {
    return (
      <div id="page-wrapper" className="dashboard">
            <div className="container-fluid">
                <div className="row bg-title">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Dashboard </h4> </div>
                    <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <ol className="breadcrumb">
                            <li><a href="/">Dashboard</a></li>
                            <li className="active">Dashboard 1</li>
                        </ol>
                    </div>
                </div>
              <Portfolio data={this.state.portfolio}
                role={this.props.role} />
            </div>
      </div>
    );
  }
};