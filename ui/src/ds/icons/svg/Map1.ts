import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Map1', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M4 4.667h2.333M1.333 12V4a1.333 1.333 0 0 1 1.333-1.333h.667A.667.667 0 0 1 4 3.333V10a.667.667 0 0 1-.667.667h-.667A1.334 1.334 0 0 0 1.333 12Zm0 0a1.333 1.333 0 0 0 1.333 1.333h8.667M14.933 6.133c0 2.088-2.235 4.293-3.116 5.082a.578.578 0 0 1-.701 0C10.236 10.425 8 8.22 8 6.133a3.467 3.467 0 0 1 6.933 0Z",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M11.467 7.289a1.156 1.156 0 1 0 0-2.311 1.156 1.156 0 0 0 0 2.31Z",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
