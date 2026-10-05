import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ScissorsLineDashed', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.613 6.28 5.333 8m4-4-5.72 5.72m3.587.147L9.333 12m1.333-4H9.333m5.333 0h-1.333M4 5.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Zm0 5.334a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
