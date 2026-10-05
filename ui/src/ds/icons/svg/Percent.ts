import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Percent', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m12.667 3.333-9.333 9.334M6 4.333a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0Zm7.334 7.334a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
