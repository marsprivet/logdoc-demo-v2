import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Leaf', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 14c0-2 1.233-3.573 3.387-4C6.333 9.68 8 8.667 8.666 8m-1.333 5.333a4.667 4.667 0 0 1-.8-9.266c3.8-.734 4.8-1.08 6.133-2.734C13.333 2.667 14 4.12 14 6.667c0 3.666-3.187 6.666-6.667 6.666Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
