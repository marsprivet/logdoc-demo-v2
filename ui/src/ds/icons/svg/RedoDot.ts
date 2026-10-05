import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('RedoDot', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 4.667v4m0 0h-4m4 0-2-1.8a6 6 0 0 0-4-1.534 6 6 0 0 0-6 6m6.667 0a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
