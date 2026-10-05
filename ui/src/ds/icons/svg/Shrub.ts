import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Shrub', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 14.667V10L6.667 8.667m2.666.666L8 10.667m3.333-5.334v.534A4 4 0 0 1 9.2 13.333H6.667a4.333 4.333 0 0 1-2-8 3.333 3.333 0 0 1 6.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
