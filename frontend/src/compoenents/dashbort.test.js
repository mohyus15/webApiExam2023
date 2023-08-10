import React from 'react';
import renderer from 'react-test-renderer';
import dashbort from './dashbort.js';
it('renders correctly', () => {
	const snap = renderer.create(<dashbort />);
	expect(snap).toMatchSnapshot();
});
