import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BedDouble', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 13.333V8a1.333 1.333 0 0 1 1.333-1.333m0 0h10.667m-10.667 0V4A1.333 1.333 0 0 1 4 2.667h8A1.333 1.333 0 0 1 13.333 4v2.667m0 0A1.333 1.333 0 0 1 14.666 8v5.333M8 2.667v4M1.333 12h13.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
