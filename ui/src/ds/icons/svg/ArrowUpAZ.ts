import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ArrowUpAZ', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2 5.333 2.667-2.666m0 0 2.666 2.666M4.667 2.667v10.666m8.666-8H10m0 1.334V4.333a1.667 1.667 0 1 1 3.333 0v2.334M10 9.333h3.333l-3.333 4h3.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
