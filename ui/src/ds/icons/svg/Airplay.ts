import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Airplay', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 11.333h-.667A1.333 1.333 0 0 1 1.333 10V3.333A1.333 1.333 0 0 1 2.666 2h10.667a1.333 1.333 0 0 1 1.333 1.333V10a1.333 1.333 0 0 1-1.333 1.333h-.667M8 10l3.333 4H4.666L8 10Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
