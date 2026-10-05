import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Eraser', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.666 14 14.2 8.467c.667-.6.667-1.6 0-2.267l-3.733-3.733c-.6-.667-1.6-.667-2.267 0l-6.4 6.4c-.667.6-.667 1.6 0 2.266L4.666 14h10M3.333 7.333l6 6",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
