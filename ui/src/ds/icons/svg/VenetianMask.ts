import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('VenetianMask', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M1.333 8a3.333 3.333 0 0 0 3.333 3.333A5.333 5.333 0 0 1 8 12.667a5.334 5.334 0 0 1 3.333-1.334A3.333 3.333 0 0 0 14.666 8V4.667h-3.333A5.333 5.333 0 0 0 8 6a5.333 5.333 0 0 0-3.334-1.333H1.333V8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M4 7.333c1 0 2 .334 2 1.334-1.334 0-2 0-2-1.334ZM12 7.333c-1 0-2 .334-2 1.334 1.333 0 2 0 2-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
