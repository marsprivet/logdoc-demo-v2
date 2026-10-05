import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FileImage', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.334 1.333V4a1.333 1.333 0 0 0 1.333 1.333h2.667m0 6-.864-.864a1.607 1.607 0 0 0-2.272 0L6 14.667m4-13.334H4a1.333 1.333 0 0 0-1.333 1.334v10.666A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.334-1.334V4.667L10 1.333ZM8 8a1.333 1.333 0 1 1-2.666 0A1.333 1.333 0 0 1 8 8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
