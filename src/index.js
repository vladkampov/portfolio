import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import App from './routes/App';
import Home from './routes/Home/Home';
import './index.scss';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Home} />
			<Redirect from="*" to="/" />
		</Route>
	</Router>,
	document.getElementById('root')
);
