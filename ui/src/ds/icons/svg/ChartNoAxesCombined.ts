import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ChartNoAxesCombined', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 10.667V14m2.666-4.667V14m2.667-7.333V14m1.333-12L8.902 7.764a.333.333 0 0 1-.472 0L6.236 5.569a.333.333 0 0 0-.472 0L1.333 10m1.333 2v2m2.667-4.667V14",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
