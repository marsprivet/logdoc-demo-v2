import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BatteryCharging', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10 4.667h.666A1.333 1.333 0 0 1 12 6v4a1.333 1.333 0 0 1-1.334 1.333H9.333M4 4.667H2.666A1.333 1.333 0 0 0 1.333 6v4a1.333 1.333 0 0 0 1.333 1.333h.667m4-6.666L5.333 8H8l-2 3.333m8.666-4v1.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
