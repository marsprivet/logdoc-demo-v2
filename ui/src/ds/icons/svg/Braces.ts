import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Braces', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 2h-.666a1.333 1.333 0 0 0-1.334 1.333v3.334A1.333 1.333 0 0 1 2 8a1.333 1.333 0 0 1 1.333 1.333v3.334c0 .733.6 1.333 1.334 1.333h.666m5.334 0h.666a1.333 1.333 0 0 0 1.334-1.333V9.333C12.667 8.6 13.267 8 14 8a1.333 1.333 0 0 1-1.333-1.333V3.333A1.333 1.333 0 0 0 11.333 2h-.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
