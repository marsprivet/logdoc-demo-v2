import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Ticket', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.666 3.333v1.334m0 6.666v1.334m0-5.334v1.334M1.333 6a2 2 0 0 1 0 4v1.333a1.333 1.333 0 0 0 1.333 1.334h10.667a1.333 1.333 0 0 0 1.333-1.334V10a2 2 0 0 1 0-4V4.667a1.333 1.333 0 0 0-1.333-1.334H2.666a1.333 1.333 0 0 0-1.333 1.334V6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
