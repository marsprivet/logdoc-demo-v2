import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Vector', (c) =>
	jsx("svg", {
	width: 15,
	height: 8,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.703 4.772h4.092M.68 6.818 3.75.68l3.068 6.138M11.592.68v6.138m0 0L8.864 4.09m2.728 2.728L14.32 4.09",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
