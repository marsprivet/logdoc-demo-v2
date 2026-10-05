import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Pocket', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 6.667 8 9.333l2.666-2.666M2.666 2h10.667a1.333 1.333 0 0 1 1.333 1.333v4a6.667 6.667 0 1 1-13.333 0v-4A1.333 1.333 0 0 1 2.666 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
