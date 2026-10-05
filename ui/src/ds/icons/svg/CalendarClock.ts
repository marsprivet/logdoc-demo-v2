import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CalendarClock', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 5V4a1.334 1.334 0 0 0-1.333-1.333H3.333A1.333 1.333 0 0 0 2 4v9.333a1.333 1.333 0 0 0 1.333 1.334h2.334m5-13.334V4M5.333 1.333V4M2 6.667h3.333m6.334 5-1-.8V9.333m4 1.334a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
