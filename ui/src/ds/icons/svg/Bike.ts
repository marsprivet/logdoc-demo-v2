import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Bike', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 11.667V9.333l-2-2 2.666-2 1.334 2h1.333m3.333 4.334a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0Zm-8.666 0a2.333 2.333 0 1 1-4.667 0 2.333 2.333 0 0 1 4.667 0Zm4.666-8.334a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
