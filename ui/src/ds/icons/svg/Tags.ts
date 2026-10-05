import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Tags', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M4.333 6.667a.333.333 0 1 0 0-.667.333.333 0 0 0 0 .667Z",
		fill: "#2A2E37"
	}), jsx("path", {
		d: "m10 3.333 4.2 4.2a1.6 1.6 0 0 1 0 2.267l-2.867 2.867M6.39 3.724c-.25-.25-.589-.39-.942-.39H2A.667.667 0 0 0 1.333 4v3.448c0 .354.14.693.39.943l3.803 3.802a1.617 1.617 0 0 0 2.28 0l2.387-2.386a1.617 1.617 0 0 0 0-2.28L6.39 3.724Zm-1.724 2.61a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
