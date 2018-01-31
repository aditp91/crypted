import React from 'react';
import {NavLink} from 'react-router-dom';

export function Nav (props) {
    let authorized = props.role === 'unauthorized' ? false : true;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><h2>Crypted</h2></a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item nav-mx">
                            <NavLink exact activeClassName="active" to="/">
                                Explore
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
                <NavLink activeClassName="active" to="/login">
                    <button className="btn btn-primary" style={authorized ? {} : { display: 'none' }}>Logout</button>
                </NavLink>
            </nav>
        </div>
    )
}