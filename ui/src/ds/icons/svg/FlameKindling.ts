import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FlameKindling', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 14.667 12.666 12m-9.333 0 9.333 2.667M8 1.333c.666 2 1.666 2.334 2.333 3a3.333 3.333 0 0 1 1 2.334 3.333 3.333 0 0 1-6.667 0c0-.2 0-.4.067-.6a1.333 1.333 0 1 0 2.2-1.334c-1.6-1.733.4-3.4 1.067-3.4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
