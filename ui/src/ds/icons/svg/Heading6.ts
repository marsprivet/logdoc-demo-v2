import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Heading6', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 8H8m-5.333 4V4M8 12V4m3.334 6.667a1.333 1.333 0 1 0 2.666 0 1.333 1.333 0 0 0-2.666 0Zm0 0c0-1.667.666-2.667 2-4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
