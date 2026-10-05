import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Highlighter', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m6 7.333-4 4v2h6l2-2M14.667 8 11.6 11.067a1.333 1.333 0 0 1-1.867 0L6.267 7.6a1.333 1.333 0 0 1 0-1.867l3.066-3.066",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
