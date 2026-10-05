import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Ghost', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 6.667h.007m3.993 0h.007M8 1.333a5.333 5.333 0 0 0-5.333 5.334v8l2-2 1.667 1.666L8 12.667l1.667 1.666 1.667-1.666 2 2v-8A5.333 5.333 0 0 0 8 1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
