import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('UserRoundX', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 14a5.333 5.333 0 0 1 7.915-4.667m2.085 2 3.333 3.334m0-3.334-3.333 3.334M10 5.333a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
