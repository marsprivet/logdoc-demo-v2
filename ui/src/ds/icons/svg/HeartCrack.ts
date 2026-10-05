import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('HeartCrack', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 3.333C9 2.333 9.826 2 11 2a3.667 3.667 0 0 1 3.666 3.667c0 1.526-1.006 2.693-2 3.666L8 14 3.333 9.333c-1-.966-2-2.133-2-3.666A3.667 3.667 0 0 1 5 2c1.173 0 2 .333 3 1.333Zm0 0L6.666 4.667l2 2L7.333 8 8 8.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
