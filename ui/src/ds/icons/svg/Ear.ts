import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Ear', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 5.667a4.333 4.333 0 1 1 8.667 0c0 4-4 4-4 6.666a2.333 2.333 0 0 1-4.667 0m6-6.666a1.667 1.667 0 1 0-3.333 0v.666a1.333 1.333 0 0 1 0 2.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
