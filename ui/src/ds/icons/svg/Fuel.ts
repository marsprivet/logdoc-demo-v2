import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Fuel', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 14.667h8M2.667 6h6.666m0 8.667v-12A1.333 1.333 0 0 0 8 1.333H4a1.333 1.333 0 0 0-1.333 1.334v12m6.666-6h1.334A1.333 1.333 0 0 1 12 10v1.333a1.333 1.333 0 0 0 2.667 0v-4.78a1.334 1.334 0 0 0-.394-.946L12 3.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
