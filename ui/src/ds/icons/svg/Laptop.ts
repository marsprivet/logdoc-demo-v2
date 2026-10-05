import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Laptop', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.334 10.667v-6A1.334 1.334 0 0 0 12 3.333H4a1.333 1.333 0 0 0-1.333 1.334v6m10.667 0H2.667m10.667 0 .853 1.7a.666.666 0 0 1-.6.966H2.414a.666.666 0 0 1-.6-.966l.853-1.7",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
