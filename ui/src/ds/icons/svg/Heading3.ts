import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Heading3', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 8H8m-5.333 4V4M8 12V4m3.667 3C12.8 6.333 14 7 14 8a1.334 1.334 0 0 1-1.333 1.333A1.333 1.333 0 0 1 14 10.667c0 1.2-1.333 2-2.666 1",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
