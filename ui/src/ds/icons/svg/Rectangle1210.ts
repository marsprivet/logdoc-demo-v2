import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Rectangle1210', (c) =>
	jsx("svg", {
	width: 10,
	height: 8,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("rect", {
		x: .667,
		y: .667,
		width: 8,
		height: 6.667,
		rx: 1.333,
		stroke: "inherit",
		strokeWidth: 1.333
	})
}),
);
