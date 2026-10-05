import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ChartSpline', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 2v10.667A1.333 1.333 0 0 0 3.333 14H14m-9.333-3.333C5 9.333 5.667 6 7.333 6 8.667 6 8.667 8 10 8c1.667 0 3-3.333 3.333-4.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
