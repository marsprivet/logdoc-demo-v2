import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Captions', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 10h2.666M10 10h1.333M4.667 7.333H6m2.667 0h2.666m-8-4h9.334c.736 0 1.333.597 1.333 1.334v6.666c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 0 1 2 11.333V4.667c0-.737.597-1.334 1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
