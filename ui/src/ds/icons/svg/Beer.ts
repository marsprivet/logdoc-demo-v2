import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Beer', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 7.333H12a2 2 0 0 1 0 4h-.667M6 8v4m2.667-4v4M3.333 5.333v8a1.333 1.333 0 0 0 1.334 1.334H10a1.333 1.333 0 0 0 1.333-1.334v-8m-2-.333c-.666 0-.96.333-2 .333S6 5 5.333 5c-.666 0-1.146.333-1.666.333a1.667 1.667 0 1 1 0-3.333c.52 0 1.046.333 1.666.333.62 0 .96-1 2-1s1.334 1 2 1C10 2.333 10.48 2 11 2a1.667 1.667 0 1 1 0 3.333c-.52 0-1-.333-1.667-.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
