import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FileVolume', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.333 7.333a3.333 3.333 0 0 1 0 4m2-10V4a1.333 1.333 0 0 0 1.333 1.333h2.667M2.845 14A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.334 1.334v2m2 2L2.666 8H1.333v2.667h1.333l2 1.333V6.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
