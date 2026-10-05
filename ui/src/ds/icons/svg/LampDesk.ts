import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LampDesk', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m9.333 3.333-2 2m2-2L14 4.667 8.667 10 7.333 5.333m2-2-2-2-2 2 2 2m-1-1L2.667 8l2 4M2 14.667v-1.334C2 12.6 2.6 12 3.333 12H6a1.334 1.334 0 0 1 1.333 1.333v1.334H2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
