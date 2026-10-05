import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PackagePlus', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.667 10.667h4m-2-2v4m1.333-6V5.333a1.333 1.333 0 0 0-.667-1.153L8.667 1.513a1.333 1.333 0 0 0-1.334 0L2.667 4.18A1.333 1.333 0 0 0 2 5.333v5.334a1.334 1.334 0 0 0 .667 1.153l4.666 2.667a1.334 1.334 0 0 0 1.334 0l1.333-.76M5 2.847l6 3.433M2.193 4.667 8 8m0 0 5.807-3.333M8 8v6.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
