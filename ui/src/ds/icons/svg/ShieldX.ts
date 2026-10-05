import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ShieldX', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.667 6.333 6.334 9.667m0-3.334 3.333 3.334m3.667-1c0 3.333-2.334 5-5.107 5.966a.667.667 0 0 1-.447-.006C5 13.667 2.667 12 2.667 8.667V4a.667.667 0 0 1 .667-.667c1.333 0 3-.8 4.16-1.813a.78.78 0 0 1 1.013 0c1.167 1.02 2.827 1.813 4.16 1.813a.667.667 0 0 1 .667.667v4.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
