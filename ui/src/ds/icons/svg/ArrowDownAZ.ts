import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ArrowDownAZ', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2 10.667 2.667 2.666m0 0 2.666-2.666m-2.666 2.666V2.667m8.666 2.666H10m0 1.334V4.333a1.667 1.667 0 1 1 3.333 0v2.334M10 9.333h3.333l-3.333 4h3.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
