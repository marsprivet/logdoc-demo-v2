import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('University', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 11.333v.007m0-2.673v.006m8 2.66v.007m0-2.673v.006m-2.667 5.994v-3.334a1.333 1.333 0 0 0-2.667 0v3.334m2-8a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Zm6 6.666v-8H12L8 2.667 4 5.333H1.333v8a1.333 1.333 0 0 0 1.333 1.334h10.667a1.333 1.333 0 0 0 1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
