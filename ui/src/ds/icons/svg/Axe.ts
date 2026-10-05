import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Axe', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m9.334 8-5.667 5.667a1.414 1.414 0 0 1-2-2L7.334 6M10 8.667l-4-4L8.666 2l4 4h2a5.333 5.333 0 0 1-4.666 4.667v-2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
