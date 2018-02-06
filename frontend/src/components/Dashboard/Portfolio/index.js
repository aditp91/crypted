import React, {Component } from 'react';

export default class Dashboard extends Component {
  constructor (props) {
    super();
    this.state = {
        data: {},
    };
  };

  componentDidMount () {
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="white-box portfolio">
                  <h3 className="box-title">My Portfolio
                      <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
                          <select className="form-control pull-right row b-none">
                          <option>January 2018</option>
                          <option>February 2018</option>
                          </select>
                      </div>
                  </h3>
                  <div className="row sales-report">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                          <h2>February 2018</h2>
                          <p classname="crypted-subheading">SALES REPORT</p>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6 ">
                          <h1 className="text-right text-success m-t-20">$3,690</h1> </div>
                  </div>
                  <div className="table-responsive">
                      <table className="table ">
                          <thead>
                              <tr>
                                  <th>NAME</th>
                                  <th>PROFIT/LOSS</th>
                                  <th>DATE</th>
                                  <th>CURRENT PRICE</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="txt-oflo">Bitcoin (BTC)</td>
                                  <td><span className="label label-success label-rounded">POSITIVE</span> </td>
                                  <td className="txt-oflo">April 18</td>
                                  <td><span className="text-success">$7400.90</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Ethereum (ETH)</td>
                                  <td><span className="label label-info label-rounded">NEUTRAL</span></td>
                                  <td className="txt-oflo">April 19</td>
                                  <td><span className="text-info">$709.35</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Litecoin (LTC)</td>
                                  <td><span className="label label-danger label-rounded">NEGATIVE</span></td>
                                  <td className="txt-oflo">April 20</td>
                                  <td><span className="text-danger">$127.47</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Ripple (XRP)</td>
                                  <td><span className="label label-success label-rounded">POSITIVE</span></td>
                                  <td className="txt-oflo">April 21</td>
                                  <td><span className="text-success">$0.71</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Neo (NEO)</td>
                                  <td><span className="label label-danger label-rounded">NEGATIVE</span></td>
                                  <td className="txt-oflo">April 21</td>
                                  <td><span className="text-success">$82.37</span></td>
                              </tr>
                          </tbody>
                      </table> <a href="/">Check all the cryptocurrencies</a> </div>
              </div>
          </div>
      </div>
    );
  }
};