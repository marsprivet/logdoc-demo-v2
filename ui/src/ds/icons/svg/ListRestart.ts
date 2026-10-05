import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ListRestart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 4H2m2.667 4H2m2.667 4H2m6 0a3.333 3.333 0 0 0 6-2 3 3 0 0 0-3-3 3.21 3.21 0 0 0-2.273.94L7.333 9.333m0 0V6.667m0 2.666H10",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
