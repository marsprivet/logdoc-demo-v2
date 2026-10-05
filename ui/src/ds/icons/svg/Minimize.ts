import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Minimize', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 2v2A1.333 1.333 0 0 1 4 5.333H2m12 0h-2A1.333 1.333 0 0 1 10.667 4V2M2 10.667h2A1.333 1.333 0 0 1 5.333 12v2m5.334 0v-2A1.333 1.333 0 0 1 12 10.667h2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
