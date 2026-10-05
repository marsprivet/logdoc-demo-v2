import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('UserRound', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8.667A3.333 3.333 0 1 0 8 2a3.333 3.333 0 0 0 0 6.667Zm0 0A5.333 5.333 0 0 1 13.334 14M8 8.667A5.333 5.333 0 0 0 2.667 14",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
