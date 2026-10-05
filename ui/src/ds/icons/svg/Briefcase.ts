import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Briefcase', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.666 13.333V2.667a1.333 1.333 0 0 0-1.333-1.334H6.666a1.333 1.333 0 0 0-1.333 1.334v10.666M2.666 4h10.667c.736 0 1.333.597 1.333 1.333V12c0 .736-.597 1.333-1.333 1.333H2.666A1.333 1.333 0 0 1 1.333 12V5.333C1.333 4.597 1.93 4 2.666 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
