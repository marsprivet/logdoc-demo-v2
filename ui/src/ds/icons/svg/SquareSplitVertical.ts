import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SquareSplitVertical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.334 5.333v-2C3.334 2.667 4 2 4.667 2h6.667c.666 0 1.333.667 1.333 1.333v2m0 5.334v2c0 .666-.667 1.333-1.333 1.333H4.667c-.667 0-1.333-.667-1.333-1.333v-2M2.667 8h10.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
