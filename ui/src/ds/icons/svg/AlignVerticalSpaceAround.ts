import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignVerticalSpaceAround', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 13.333H1.333M14.666 2.667H1.333M6 6h4c.736 0 1.333.597 1.333 1.333v1.334C11.333 9.403 10.736 10 10 10H6a1.333 1.333 0 0 1-1.334-1.333V7.333C4.666 6.597 5.263 6 6 6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
