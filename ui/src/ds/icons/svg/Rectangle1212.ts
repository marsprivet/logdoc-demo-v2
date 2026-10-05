import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Rectangle1212', (c) =>
	jsx("svg", {
	width: 2,
	height: 2,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("rect", {
		width: 2,
		height: 2,
		rx: .667,
		fill: "#fff"
	})
}),
);
