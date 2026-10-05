import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('RockingChair', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2.333 1.333 2 7H12m-5.667 0-2.667 5m6.334-5 2.333 5M1.833 12a8.668 8.668 0 0 0 12.333 0",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
