import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Rectangle1207', (c) =>
	jsx("svg", {
	width: 12,
	height: 4,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("rect", {
		x: .667,
		y: .667,
		width: 10.667,
		height: 2.667,
		rx: .067,
		stroke: "inherit",
		strokeWidth: 1.333
	})
}),
);
