import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Coffee', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 1.333v1.334m2.666-1.334v1.334m1.334 2.666a.667.667 0 0 1 .666.667v5.333A2.666 2.666 0 0 1 8.667 14h-4A2.667 2.667 0 0 1 2 11.333V6a.667.667 0 0 1 .667-.667H12a2.667 2.667 0 0 1 0 5.334h-.667M4 1.333v1.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
