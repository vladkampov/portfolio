import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const context = { router: { isActive: (a, b) => false } };
  const renderedComponent = shallow(<App />, { context });
});
