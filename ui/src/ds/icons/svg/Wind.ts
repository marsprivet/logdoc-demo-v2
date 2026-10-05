import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Wind', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.8 5.133A1.666 1.666 0 1 1 13 8H1.333M6.4 3.067a1.333 1.333 0 1 1 .933 2.266h-6m7.067 7.6a1.333 1.333 0 1 0 .933-2.266h-8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
