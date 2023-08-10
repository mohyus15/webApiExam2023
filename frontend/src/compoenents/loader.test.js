import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './loader.js';
it('renders correctly', () => {
	const snap = renderer.create(<Loader />);
	expect(snap).toMatchSnapshot();
});
