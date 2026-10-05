import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Caravan', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 6H4v2.667H1.333V6Zm0 0A2.667 2.667 0 0 1 4 3.333h5.333A2.667 2.667 0 0 1 12 6v6.667M1.333 6v5.333a1.333 1.333 0 0 0 1.333 1.334H4m2.666 0h2.667V6H6.666v6.667Zm0 0a1.333 1.333 0 1 1-2.666 0m2.666 0a1.333 1.333 0 1 0-2.666 0m2.666 0h8v-1.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
