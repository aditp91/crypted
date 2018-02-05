import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';

import {$,jQuery} from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// import './plugins/bower_components/jquery/dist/jquery.min.js';
// import './vendor/bootstrap/dist/js/tether.min.js';
// import './vendor/bootstrap/dist/js/bootstrap.min.js';
// import './plugins/bower_components/bootstrap-extension/js/bootstrap-extension.min.js';
// import './plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js';
// import './vendor/js/jquery.slimscroll.js';
// import './vendor/js/waves.js';
// import './plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js';
// import './plugins/bower_components/waypoints/lib/jquery.waypoints.js';
// import './plugins/bower_components/counterup/jquery.counterup.min.js';
// import './plugins/bower_components/raphael/raphael-min.js';
// import './plugins/bower_components/morrisjs/morris.js';
// import './vendor/js/custom.min.js';
// import './vendor/js/dashboard1.js';
// import './plugins/bower_components/jquery-sparkline/jquery.sparkline.min.js';
// import './plugins/bower_components/jquery-sparkline/jquery.charts-sparkline.js';
// import './plugins/bower_components/toast-master/js/jquery.toast.js';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();