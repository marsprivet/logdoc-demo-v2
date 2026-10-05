import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BedSingle', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 13.333V8a1.333 1.333 0 0 1 1.333-1.333m0 0h9.334m-9.334 0V4a1.333 1.333 0 0 1 1.334-1.333h6.666A1.333 1.333 0 0 1 12.667 4v2.667m0 0A1.333 1.333 0 0 1 14 8v5.333M2 12h12",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
