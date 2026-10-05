import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BellMinus', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.267 8C12.8 10.533 14 11.333 14 11.333H2s2-1.333 2-6c0-2.2 1.8-4 4-4 1.2 0 2.267.534 3 1.334M6.867 14a1.293 1.293 0 0 0 2.266 0M10 5.333h4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
