import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Infinity', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8C6.666 6.22 5.333 5.333 4 5.333a2.667 2.667 0 1 0 0 5.334c1.333 0 2.666-.887 4-2.667Zm0 0c1.333 1.78 2.666 2.667 4 2.667a2.667 2.667 0 0 0 0-5.334c-1.334 0-2.667.887-4 2.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
