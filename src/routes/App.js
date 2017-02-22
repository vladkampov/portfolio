import React from 'react';
import './App.scss';

export default function App({ children }) {
	return (
		<div className="App">
			<div className="container">
				{children}
			</div>
		</div>
	);
}
