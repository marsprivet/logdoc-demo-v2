import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('IceCreamCone', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m4.666 7.333 2.72 6.9a.667.667 0 0 0 1.227 0l2.72-6.9m-6.667 0h6.667m-6.667 0a1.333 1.333 0 1 1 0-2.666 3.333 3.333 0 0 1 6.667 0 1.333 1.333 0 1 1 0 2.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
