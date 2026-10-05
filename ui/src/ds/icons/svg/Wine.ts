import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Wine', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 14.667h5.333m-6-8h6.667m-6.667 0C4.667 5.333 5 4 6 1.333h4c1 2.667 1.334 4 1.334 5.334m-6.667 0A3.333 3.333 0 0 0 8 10m3.334-3.333A3.333 3.333 0 0 1 8 10m0 0v4.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
