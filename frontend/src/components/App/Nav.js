import React from 'react';
// import {NavLink} from 'react-router-dom';

export function Nav (props) {
    // let authorized = props.role === 'unauthorized' ? false : true;

    return (
        <div>
            <nav className="crypted-nav navbar navbar-default navbar-static-top m-b-0">
                <div className="navbar-header">
                <a className="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse">
                    <i className="ti-menu"></i>
                </a>
                <div className="top-left-part">
                    <a className="logo" href="/"><h1>Crypted</h1></a>
                </div>
                <ul className="nav navbar-top-links navbar-left hidden-xs">
                    <li>
                    <a href="javascript:void(0)" className="open-close hidden-xs waves-effect waves-light">
                        <i className="icon-arrow-left-circle ti-menu"></i>
                    </a>
                    </li>
                    <li>
                    <form role="search" className="app-search hidden-xs">
                        <input type="text" placeholder="Search..." className="form-control" />
                        <a href="">
                        <i className="fa fa-search"></i>
                        </a>
                    </form>
                    </li>
                </ul>
                <ul className="nav navbar-top-links navbar-right pull-right">
                    <li className="dropdown">
                    <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#">
                        <i className="icon-envelope"></i>
                        <div className="notify">
                        <span className="heartbit"></span>
                        <span className="point"></span>
                        </div>
                    </a>
                    <ul className="dropdown-menu mailbox animated bounceInDown">
                        <li>
                        <div className="drop-title">You have 4 new messages</div>
                        </li>
                        <li>
                        <div className="message-center">
                            <a href="#">
                            <div className="user-img">
                                <img src="../plugins/images/users/pawandeep.jpg" alt="user" className="img-circle" />
                                <span className="profile-status online pull-right"></span>
                            </div>
                            <div className="mail-contnet">
                                <h5>Pavan kumar</h5>
                                <span className="mail-desc">Just see the my admin!</span>
                                <span className="time">9:30 AM</span>
                            </div>
                            </a>
                        </div>
                        </li>
                        <li>
                        <a className="text-center" href="javascript:void(0);">
                            <strong>See all notifications</strong>
                            <i className="fa fa-angle-right"></i>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="dropdown">
                    <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#">
                        <i className="icon-note"></i>
                        <div className="notify">
                        <span className="heartbit"></span>
                        <span className="point"></span>
                        </div>
                    </a>
                    <ul className="dropdown-menu dropdown-tasks animated slideInUp">
                        <li>
                        <a href="#">
                            <div>
                            <p>
                                <strong>Task 1</strong>
                                <span className="pull-right text-muted">40% Complete</span>
                            </p>
                            <div className="progress progress-striped active">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                <span className="sr-only">40% Complete (success)</span>
                                </div>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                        <a className="text-center" href="#">
                            <strong>See All Tasks</strong>
                            <i className="fa fa-angle-right"></i>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="mega-dropdown">
                    <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#">
                        <span className="hidden-xs">Mega</span>
                        <i className="icon-options-vertical"></i>
                    </a>
                    <ul className="dropdown-menu mega-dropdown-menu animated bounceInDown">
                        <li className="col-sm-3">
                        <ul>
                            <li className="dropdown-header">Forms Elements</li>
                            <li>
                            <a href="form-basic.html">Basic Forms</a>
                            </li>
                            <li>
                            <a href="form-layout.html">Form Layout</a>
                            </li>
                            <li>
                            <a href="form-advanced.html">Form Addons</a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="right-side-toggle">
                    <a className="waves-effect waves-light" href="javascript:void(0)">
                        <i className="ti-settings"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </nav>

            {/* left sidebar */}
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse slimscrollsidebar">
                    <div className="user-profile">
                        <div className="dropdown user-pro-body">
                            <div><img src="../../plugins/images/users/varun.jpg" alt="user-img" className="img-circle"/></div>
                            <a href="#" className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Crypted Username <span className="caret"></span></a>
                            <ul className="dropdown-menu animated flipInY">
                                <li><a href="#"><i className="ti-user"></i> My Profile</a></li>
                                <li><a href="#"><i className="ti-wallet"></i> My Balance</a></li>
                                <li><a href="#"><i className="ti-email"></i> Inbox</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="login.html"><i className="fa fa-power-off"></i> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search hidden-sm hidden-md hidden-lg">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button"> <i className="fa fa-search"></i> </button>
                                </span> 
                            </div>
                        </li>
                        <li className="nav-small-cap m-t-10">--- Main Menu</li>
                        <li> <a href="index.html" className="waves-effect active"><i className="linea-icon linea-basic fa-fw" data-icon="v"></i> <span className="hide-menu"> Dashboard <span className="fa arrow"></span> <span className="label label-rouded label-custom pull-right">4</span></span></a>
                            <ul className="nav nav-second-level">
                                <li> <a href="index.html">Minimalistic</a> </li>
                                <li> <a href="index2.html">Demographical</a> </li>
                                <li> <a href="index3.html">Analitical</a> </li>
                                <li> <a href="index4.html">Simpler</a> </li>
                            </ul>
                        </li>
                        <li> <a href="javascript:void(0);" className="waves-effect"><i className="linea-icon linea-basic fa-fw text-danger" data-icon="7"></i> <span className="hide-menu text-danger"> Multipurpose <span className="fa arrow"></span> <span className="label label-rouded label-danger pull-right">HOT</span></span></a>
                            <ul className="nav nav-second-level">
                                <li> <a href="../eliteadmin-hospital/index.html">Hospital Admin</a> </li>
                                <li> <a href="../eliteadmin-crm/index.html">CRM Admin</a> </li>
                                <li> <a href="../eliteadmin-university/index.html">University Admin</a> </li>
                                <li> <a href="../eliteadmin-music/index.html">Music Admin</a> </li>
                            </ul>
                        </li>
                        <li className="nav-small-cap">--- Proffessional</li>
                        <li> <a href="#" className="waves-effect"><i data-icon="&#xe006;" className="linea-icon linea-basic fa-fw"></i> <span className="hide-menu">Charts<span className="fa arrow"></span></span></a>
                            <ul className="nav nav-second-level">
                                <li> <a href="flot.html">Flot Charts</a> </li>
                                <li><a href="morris-chart.html">Morris Chart</a></li>
                                <li><a href="chart-js.html">Chart-js</a></li>
                                <li><a href="peity-chart.html">Peity Charts</a></li>
                            </ul>
                        </li>
                        <li><a href="login.html" className="waves-effect"><i className="icon-logout fa-fw"></i> <span className="hide-menu">Log out</span></a></li>
                        <li className="nav-small-cap">--- Support</li>
                        <li><a href="documentation.html" className="waves-effect"><i className="fa fa-circle-o text-danger"></i> <span className="hide-menu">Documentation</span></a></li>
                        <li><a href="gallery.html" className="waves-effect"><i className="fa fa-circle-o text-info"></i> <span className="hide-menu">Gallery</span></a></li>
                        <li><a href="faq.html" className="waves-effect"><i className="fa fa-circle-o text-success"></i> <span className="hide-menu">Faqs</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}