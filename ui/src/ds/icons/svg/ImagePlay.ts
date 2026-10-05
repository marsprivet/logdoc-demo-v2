import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ImagePlay', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.333 10.667 4 14m3.333 0h-4A1.334 1.334 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2h9.334A1.333 1.333 0 0 1 14 3.333v4.334m-3.49 7a.333.333 0 0 1-.51-.283V8.92a.333.333 0 0 1 .51-.283l3.919 2.45a.666.666 0 0 1 0 1.13l-3.919 2.45ZM7.333 6a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
