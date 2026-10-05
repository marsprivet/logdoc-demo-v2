import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FileJson', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.334 1.333V4a1.333 1.333 0 0 0 1.333 1.333h2.667M6.667 8A.667.667 0 0 0 6 8.667v.666a.667.667 0 0 1-.666.667.667.667 0 0 1 .666.667v.666a.667.667 0 0 0 .667.667m2.667 0a.667.667 0 0 0 .666-.667v-.666a.667.667 0 0 1 .667-.667.667.667 0 0 1-.667-.667v-.666A.667.667 0 0 0 9.334 8M10 1.333H4a1.333 1.333 0 0 0-1.333 1.334v10.666A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.334-1.334V4.667L10 1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
