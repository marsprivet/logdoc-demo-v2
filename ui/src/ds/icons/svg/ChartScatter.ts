import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ChartScatter', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 2v10.667A1.333 1.333 0 0 0 3.333 14H14M5.333 5a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Zm7.334-1.333a.333.333 0 1 1-.667 0 .333.333 0 0 1 .667 0ZM8 7.667a.333.333 0 1 1-.667 0 .333.333 0 0 1 .667 0ZM5.333 11a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0ZM12 9.667a.333.333 0 1 1-.667 0 .333.333 0 0 1 .667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
