import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SquareArrowOutDownLeft', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.667 14h4A1.334 1.334 0 0 0 14 12.667V3.333A1.334 1.334 0 0 0 12.667 2H3.333A1.333 1.333 0 0 0 2 3.333v4M2 14l6-6m-6 6h4m-4 0v-4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
