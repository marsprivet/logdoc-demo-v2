import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('LampWallUp', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.334 7.333v3.334A1.333 1.333 0 0 1 8 12H5.334m2-9.333h4l2 4.666h-8l2-4.666ZM2.667 10H4a1.333 1.333 0 0 1 1.334 1.333v1.334A1.333 1.333 0 0 1 4 14H2.667v-4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
