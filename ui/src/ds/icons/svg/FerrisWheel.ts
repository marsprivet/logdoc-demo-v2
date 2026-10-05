import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FerrisWheel', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Zm0 0-2 5.334m2-5.334 2 5.334M8 1.333V4m-3.467 6L2.2 11.333m11.6-6.666L11.467 6M4.533 6 2.2 4.667m11.6 6.666L11.467 10m-6.134 4.667h5.334m1.333-2.2a6 6 0 1 0-8 0",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
