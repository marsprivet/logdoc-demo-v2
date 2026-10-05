import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FileScan', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.334 6.667v-2L10 1.333H4a1.333 1.333 0 0 0-1.333 1.334v10.666A1.333 1.333 0 0 0 4 14.667h2.667M9.334 1.333V4a1.333 1.333 0 0 0 1.333 1.333h2.667m-2.667 4a1.333 1.333 0 0 0-1.333 1.334m4-1.334a1.333 1.333 0 0 1 1.333 1.334m-1.333 4a1.333 1.333 0 0 0 1.333-1.334m-4 1.334a1.333 1.333 0 0 1-1.333-1.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
