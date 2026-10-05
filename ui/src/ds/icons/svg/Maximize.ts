import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Maximize', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 2h-2A1.333 1.333 0 0 0 2 3.333v2m12 0v-2A1.334 1.334 0 0 0 12.667 2h-2M2 10.667v2A1.333 1.333 0 0 0 3.333 14h2m5.334 0h2A1.334 1.334 0 0 0 14 12.667v-2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
