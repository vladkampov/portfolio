import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Provider } from 'mobx-react';
import { FormStore } from 'reactive-mobx-form';
import Wrapper from './routes/App';
import Home from './routes/Home/Home';
import Music from './routes/Music/Music';
import Dev from './routes/Dev/Dev';
import UrlShortener from './routes/UrlShortener/UrlShortener';
import DomainStore from './store/domainStore';
import './index.scss';

const Wrapped = {
	Home: Wrapper(Home),
	Music: Wrapper(Music),
	Dev: Wrapper(Dev),
	UrlShortener: Wrapper(UrlShortener)
};

const store = { ...new DomainStore(), ...{ formStore: new FormStore() } };

ReactDOM.render(
	<Provider {...store}>
		<BrowserRouter>
			<React.Fragment>
				<Route path="/" exact component={Wrapped.Home} />
				<Route path="/music" component={Wrapped.Music} />
				<Route path="/dev" component={Wrapped.Dev} />
				<Route path="/url-shortener" component={Wrapped.UrlShortener} />
			</React.Fragment>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
