import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';

import $ from 'jquery'; // instead of - import './plugins/bower_components/jquery/dist/jquery.min.js';
// import './vendor/bootstrap/dist/js/tether.min.js';
// import './vendor/bootstrap/dist/js/bootstrap.min.js';
// import './plugins/bower_components/bootstrap-extension/js/bootstrap-extension.min.js';
// import './vendor/js/custom.min.js';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();