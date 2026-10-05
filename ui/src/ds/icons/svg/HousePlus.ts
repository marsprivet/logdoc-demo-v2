import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('HousePlus', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.813 1.61a1.333 1.333 0 0 0-1.674.039L2.473 5.648A1.333 1.333 0 0 0 2 6.667v6A1.333 1.333 0 0 0 3.333 14h9.334A1.334 1.334 0 0 0 14 12.667V7.764M10 14V8.667A.667.667 0 0 0 9.333 8H6.667A.667.667 0 0 0 6 8.667V14m4-10h4m-2-2v4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
