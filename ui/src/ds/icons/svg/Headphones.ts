import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Headphones', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 9.333h2a1.333 1.333 0 0 1 1.333 1.334v2A1.333 1.333 0 0 1 4 14h-.667A1.334 1.334 0 0 1 2 12.667V8a6 6 0 1 1 12 0v4.667A1.334 1.334 0 0 1 12.667 14H12a1.333 1.333 0 0 1-1.333-1.333v-2A1.333 1.333 0 0 1 12 9.333h2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
