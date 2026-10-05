import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SunSnow', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 6a2 2 0 1 0 0 4M1.333 8H2m7.333 6V2m-2.667.667V2m0 12v-.667m-4.24-1.093.467-.467m0-7.546-.467-.467M9.333 8h5.333m-3.333-5.333-2 2m0 6.666 2 2M14 10l-2-2 2-2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
