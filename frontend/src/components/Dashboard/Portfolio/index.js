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
                      <div className="col-md-2 col-sm-2 col-xs-2 pull-right">
                          <select className="form-control pull-right row b-none">
                          <option>January 2018</option>
                          <option>February 2018</option>
                          </select>
                      </div>
                  </h3>
                  <div className="row sales-report">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                          <h2>February 2018</h2>
                          <p>MONTH EARNINGS</p>
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
                                  <th>QUANTITY</th>
                                  <th>LAST PRICE</th>
                                  <th>24Hr CHANGE</th>
                                  <th>AVG. PRICE PAID</th>
                                  <th>$ GAIN</th>
                                  <th>% GAIN</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="txt-oflo">Bitcoin (BTC)</td>
                                  <td><span className="label label-success label-rounded">POSITIVE</span> </td>
                                  <td className="txt-oflo">12</td>
                                  <td><span className="text-info">$7400.90</span></td>
                                  <td><span className="text-danger">-11.50%</span></td>
                                  <td><span className="text-info">$3000.00</span></td>
                                  <td><span className="text-success">+$52800.00</span></td>
                                  <td><span className="text-success">+146.66%</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Ethereum (ETH)</td>
                                  <td><span className="label label-warning label-rounded">NEUTRAL</span></td>
                                  <td className="txt-oflo">20</td>
                                  <td><span className="text-info">$709.35</span></td>
                                  <td><span className="text-danger">-7.58%</span></td>
                                  <td><span className="text-info">$709.35</span></td>
                                  <td><span className="text-warning">+$0.00</span></td>
                                  <td><span className="text-warning">+0%</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Litecoin (LTC)</td>
                                  <td><span className="label label-danger label-rounded">NEGATIVE</span></td>
                                  <td className="txt-oflo">48</td>
                                  <td><span className="text-info">$127.47</span></td>
                                  <td><span className="text-success">+2.50%</span></td>
                                  <td><span className="text-info">$150.13</span></td>
                                  <td><span className="text-danger">-$1104.00</span></td>
                                  <td><span className="text-danger">-15.36%</span></td>
                              </tr>
                              <tr>
                                  <td className="txt-oflo">Neo (NEO)</td>
                                  <td><span className="label label-success label-rounded">POSITIVE</span></td>
                                  <td className="txt-oflo">15</td>
                                  <td><span className="text-info">$82.37</span></td>
                                  <td><span className="text-danger">-6.50%</span></td>
                                  <td><span className="text-info">$51.40</span></td>
                                  <td><span className="text-success">$1005.10</span></td>
                                  <td><span className="text-success">+60.71%</span></td>
                              </tr>
                          </tbody>
                      </table> <a href="/">See entire portfolio</a> </div>
              </div>
          </div>
      </div>
    );
  }
};