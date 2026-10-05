import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Signature', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m14 11.333-1.437-1.245a.334.334 0 0 0-.563.245v.334a.667.667 0 0 1-.667.666H10a.667.667 0 0 1-.667-.666C9.333 8.97 6.673 8.02 3.667 8a1.667 1.667 0 0 0 0 3.333c2.768 0 3.163-7.53 3.805-9a1.667 1.667 0 1 1 2.207 2.19M2 14h12",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
