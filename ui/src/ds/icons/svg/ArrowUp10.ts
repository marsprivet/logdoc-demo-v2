import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ArrowUp10', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2 5.333 2.667-2.666m0 0 2.666 2.666M4.667 2.667v10.666m6.666-6.666v-4H10m0 4h2.667m-1.334 2.666c.737 0 1.334.597 1.334 1.334V12A1.333 1.333 0 0 1 10 12v-1.333c0-.737.597-1.334 1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
