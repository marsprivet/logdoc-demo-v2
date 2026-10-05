import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Refrigerator', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 6.667h9.333m-2.666-2v4M3.333 4A2.667 2.667 0 0 1 6 1.333h4A2.667 2.667 0 0 1 12.666 4v9.333a1.333 1.333 0 0 1-1.333 1.334H4.666a1.333 1.333 0 0 1-1.333-1.334V4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
