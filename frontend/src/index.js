import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';

// import '!!style-loader!css-loader! ../vendor/css/style.css';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();