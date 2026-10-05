import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Wand', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10 2.667V1.333m0 9.334V9.333M5.333 6h1.334m6.666 0h1.334m-2.8 1.867.8.8M10 6h.007m1.86-1.867.8-.8M2 14l6-6m.133-3.867-.8-.8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
