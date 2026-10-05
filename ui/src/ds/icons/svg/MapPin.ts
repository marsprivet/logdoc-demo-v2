import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MapPin', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M13.334 6.667c0 3.328-3.693 6.795-4.933 7.866a.667.667 0 0 1-.801 0c-1.24-1.071-4.933-4.538-4.933-7.866a5.333 5.333 0 0 1 10.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M8 8.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
