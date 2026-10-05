import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Weight', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 5.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4.333 5.333a1.333 1.333 0 0 0-1.27.974L1.4 12.333A1.333 1.333 0 0 0 2.666 14h10.667a1.334 1.334 0 0 0 1.284-1.693l-1.684-5.974a1.334 1.334 0 0 0-1.28-1h-7.32Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
