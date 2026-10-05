import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SquareSplitHorizontal', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 12.667h-2C2.667 12.667 2 12 2 11.333V4.667C2 4 2.667 3.333 3.333 3.333h2m5.334 0h2C13.333 3.333 14 4 14 4.667v6.666c0 .667-.667 1.334-1.333 1.334h-2M8 2.667v10.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
