import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CakeSlice', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.8 5.267 2 7.333v6c0 .4.267.667.667.667h10.666c.4 0 .667-.267.667-.667v-6C14 6 12 3.333 9.333 2l-2.4 1.733m3.734 4.934H2m8.667 2.666H2m5.333-6.666a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
