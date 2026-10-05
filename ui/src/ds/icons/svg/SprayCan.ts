import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SprayCan', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 2h.007m2.66 1.333h.006m2.66 1.334h.007m-5.34 0h.007M4.667 6h.006M2 7.333h.007M12.667 6V3.333H10V6m2.667 0H10m2.667 0L14 7.333V14c0 .4-.267.667-.667.667h-4c-.4 0-.666-.267-.666-.667V7.333L10 6M8.667 9.333 14 8m-5.333 4.667L14 11.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
