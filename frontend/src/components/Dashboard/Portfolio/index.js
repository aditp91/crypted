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
          <div className="col-md-12 col-lg-6 col-sm-12">
              <div className="white-box portfolio">
                  <h3 className="box-title">Recent sales
                      <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
                          <select className="form-control pull-right row b-none">
                          <option>March 2017</option>
                          <option>April 2017</option>
                          <option>May 2017</option>
                          <option>June 2017</option>
                          <option>July 2017</option>
                          </select>
                      </div>
                  </h3>
                  <div className="row sales-report">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                          <h2>March 2017</h2>
                          <p>SALES REPORT</p>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6 ">
                          <h1 className="text-right text-success m-t-20">$3,690</h1> </div>
                  </div>
                  <div className="table-responsive">
                      <table className="table ">
                          <thead>
                              <tr>
                                  <th>NAME</th>
                                  <th>STATUS</th>
                                  <th>DATE</th>
                                  <th>PRICE</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="txt-oflo">Elite admin</td>
                                  <td><span className="label label-megna label-rounded">SALE</span> </td>
                                  <td className="txt-oflo">April 18</td>
                                  <td><span className="text-success">$24</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Real Homes</td>
                                  <td><span className="label label-info label-rounded">EXTENDED</span></td>
                                  <td className="txt-oflo">April 19</td>
                                  <td><span className="text-info">$1250</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Medical Pro</td>
                                  <td><span className="label label-danger label-rounded">TAX</span></td>
                                  <td className="txt-oflo">April 20</td>
                                  <td><span className="text-danger">-$24</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Hosting press</td>
                                  <td><span className="label label-megna label-rounded">SALE</span></td>
                                  <td className="txt-oflo">April 21</td>
                                  <td><span className="text-success">$24</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Helping Hands</td>
                                  <td><span className="label label-success label-rounded">MEMBER</span></td>
                                  <td className="txt-oflo">April 22</td>
                                  <td><span className="text-success">$24</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Digital Agency</td>
                                  <td><span className="label label-megna label-rounded">SALE</span> </td>
                                  <td className="txt-oflo">April 23</td>
                                  <td><span className="text-danger">-$14</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Helping Hands</td>
                                  <td><span className="label label-success label-rounded">MEMBER</span></td>
                                  <td className="txt-oflo">April 22</td>
                                  <td><span className="text-success">$64</span></td>
                              </tr>
                          </tbody>
                      </table> <a href="#">Check all the sales</a> </div>
              </div>
          </div>
      </div>
    );
  }
};