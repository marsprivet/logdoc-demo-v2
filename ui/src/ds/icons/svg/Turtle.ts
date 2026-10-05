import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Turtle', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m8 6.667 1.333 2.666v2A.667.667 0 0 0 10 12h1.333a.666.666 0 0 0 .667-.667v-2a5.333 5.333 0 1 0-10.667 0M8 6.667H5.333m2.667 0 2.12-1.4M1.333 9.333v2A.667.667 0 0 0 2 12h1.333A.666.666 0 0 0 4 11.333v-2l1.333-2.666m-4 2.666h12a1.333 1.333 0 1 0 0-2.666h-2.047m-5.953 0-2.12-1.4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
