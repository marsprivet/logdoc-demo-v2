import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Cable', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 14v-1.333m0 0a.667.667 0 0 1-.667-.667v-.667A1.333 1.333 0 0 1 12 10h1.333a1.333 1.333 0 0 1 1.333 1.333V12a.667.667 0 0 1-.666.667m-2.667 0H14m0 0V14m-1.334-4V4.333a2.333 2.333 0 1 0-4.666 0v7.334a2.333 2.333 0 0 1-4.667 0V6M2 3.333h2.666M2 3.333A.667.667 0 0 0 1.333 4v.667A1.333 1.333 0 0 0 2.666 6H4a1.333 1.333 0 0 0 1.333-1.333V4a.667.667 0 0 0-.667-.667M2 3.333V2m2.666 1.333V2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
