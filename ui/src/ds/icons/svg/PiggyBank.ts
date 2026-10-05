import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PiggyBank', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 8c0-3.533 5-4.333 7.333-3.333.134-.4 1-1.334 2-1.334v2c.334.334.667.667.667 1.334h1.333v2.666h-1.333c-.2.667-.667 1-1.333 1.334v2.666H9.333V12h-2v1.333H4.666V11c-1.333-1-1.333-1.8-1.333-3Zm0 0h-.667c-.733 0-1.333-.6-1.333-1.333V6m9.333 1.333h.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
