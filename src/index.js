import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Wrapper from './routes/App';
import Home from './routes/Home/Home';
import Music from './routes/Music/Music';
import Dev from './routes/Dev/Dev';
import './index.scss';

const Wrapped = {
	Home: Wrapper(Home),
	Music: Wrapper(Music),
	Dev: Wrapper(Dev),
}

ReactDOM.render(
	<BrowserRouter>
		<React.Fragment>
			<Route path="/" exact component={Wrapped.Home} />
			<Route path="/music" component={Wrapped.Music} />
			<Route path="/dev" component={Wrapped.Dev} />
		</React.Fragment>
	</BrowserRouter>,
	document.getElementById('root')
);
