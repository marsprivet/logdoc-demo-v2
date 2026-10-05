import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ListTodo', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2 11.333 1.333 1.334L6 10m2.667-6H14M8.667 8H14m-5.333 4H14M2.667 3.333h2.666c.369 0 .667.299.667.667v2.667a.667.667 0 0 1-.667.666H2.667A.667.667 0 0 1 2 6.667V4c0-.368.298-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
