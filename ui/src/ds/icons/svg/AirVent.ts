import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AirVent', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 8H2.666a1.333 1.333 0 0 1-1.333-1.333V3.333A1.333 1.333 0 0 1 2.666 2h10.667a1.333 1.333 0 0 1 1.333 1.333v3.334A1.333 1.333 0 0 1 13.333 8H12M4 5.333h8m.2 6.467a1.667 1.667 0 0 1-2.107 2.553 1.687 1.687 0 0 1-.76-1.333V8M4.4 10.4a1.334 1.334 0 1 0 2.266.933V8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
