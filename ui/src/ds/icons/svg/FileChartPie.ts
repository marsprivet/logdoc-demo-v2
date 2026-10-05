import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FileChartPie', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.333 1.333V4a1.333 1.333 0 0 0 1.334 1.333h2.666m-2.666 9.334H12a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.333 1.334V5m.011 2.675a4 4 0 1 0 5.644 5.65M6 10.667A.667.667 0 0 1 5.333 10V7.333c0-.368.3-.672.664-.611a4 4 0 0 1 3.281 3.281c.06.363-.243.664-.611.664H6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
