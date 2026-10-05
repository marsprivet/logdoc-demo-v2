import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CupSoda', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m4 5.333 1.166 8.187A1.334 1.334 0 0 0 6.5 14.667h3.026a1.333 1.333 0 0 0 1.334-1.147L12 5.333m-8.667 0h9.333m-8 4.667A4.313 4.313 0 0 1 8 10a4.313 4.313 0 0 0 3.333 0M8 5.333l.666-4H10",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
