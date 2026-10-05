import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Sticker', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.333 2v2.667A1.333 1.333 0 0 0 10.667 6h2.666m-8 2.667h.007m5.327 0h.006m-4.006 2s.533.666 1.333.666c.867 0 1.333-.666 1.333-.666m1-8.667h-7A1.333 1.333 0 0 0 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334A1.334 1.334 0 0 0 14 12.667v-7L10.333 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
