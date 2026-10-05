import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('RefreshCw', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 8a6 6 0 0 1 6-6 6.5 6.5 0 0 1 4.493 1.827L14 5.333m0 0V2m0 3.333h-3.333M14 8a6 6 0 0 1-6 6 6.5 6.5 0 0 1-4.493-1.827L2 10.667m0 0h3.333m-3.333 0V14",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
