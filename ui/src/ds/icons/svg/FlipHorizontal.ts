import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FlipHorizontal', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 2h-2A1.333 1.333 0 0 0 2 3.333v9.334C2 13.4 2.6 14 3.333 14h2m5.334-12h2A1.333 1.333 0 0 1 14 3.333v9.334A1.334 1.334 0 0 1 12.667 14h-2M8 13.333v1.334m0-5.334v1.334m0-5.334v1.334m0-5.334v1.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
