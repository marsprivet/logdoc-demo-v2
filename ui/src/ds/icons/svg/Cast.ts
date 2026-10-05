import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Cast', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 5.333V4a1.333 1.333 0 0 1 1.333-1.333h10.667A1.333 1.333 0 0 1 14.666 4v8a1.333 1.333 0 0 1-1.333 1.333h-4M1.333 8a6 6 0 0 1 5.333 5.333m-5.333-2.666A3.334 3.334 0 0 1 4 13.333m-2.667 0h.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
