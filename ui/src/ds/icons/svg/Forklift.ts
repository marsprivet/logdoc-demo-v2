import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Forklift', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8H3.333A1.333 1.333 0 0 0 2 9.333v3.334m0 0a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0Zm5.333 0a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0Zm0 0h-2m5.334-11.334v11.334h4M4 8V4.667c0-.734.6-1.334 1.333-1.334h2l3.334 3.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
