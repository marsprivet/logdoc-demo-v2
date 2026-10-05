import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Youtube', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M1.667 11.333a16.08 16.08 0 0 1 0-6.666 1.333 1.333 0 0 1 .933-.934 33.04 33.04 0 0 1 10.8 0 1.334 1.334 0 0 1 .933.934 16.077 16.077 0 0 1 0 6.666 1.334 1.334 0 0 1-.933.934 33.038 33.038 0 0 1-10.8 0 1.334 1.334 0 0 1-.933-.934Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M6.667 10 10 8 6.667 6v4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
