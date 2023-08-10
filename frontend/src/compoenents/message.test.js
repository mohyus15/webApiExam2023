import React from 'react';
import renderer from 'react-test-renderer';
import Message from './message.js';
it('renders correctly', () => {
	const snap = renderer.create(<Message />);
	expect(snap).toMatchSnapshot();
});
