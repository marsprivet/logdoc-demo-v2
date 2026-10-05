import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ChevronsDownUp', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 13.333 8 10l3.334 3.333M4.667 2.667 8 6l3.334-3.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
