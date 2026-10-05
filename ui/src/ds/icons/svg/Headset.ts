import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Headset', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 7.333h2a1.333 1.333 0 0 1 1.333 1.334v2A1.333 1.333 0 0 1 4 12h-.667A1.334 1.334 0 0 1 2 10.667V7.333Zm0 0a6 6 0 1 1 12 0m0 0v3.334m0-3.334h-2a1.333 1.333 0 0 0-1.333 1.334v2A1.333 1.333 0 0 0 12 12h.667A1.334 1.334 0 0 0 14 10.667m0 0V12a2.667 2.667 0 0 1-2.667 2.667H8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
