import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Gavel', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m9.666 8.333-5.333 5.334a1.414 1.414 0 1 1-2-2l5.333-5.334m3 4.334 4-4M5.333 5.333l4-4M6 4.667 11.333 10M14 7.333 8.666 2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
