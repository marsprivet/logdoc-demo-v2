import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Ampersand', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.666 8c0 2.933-2.4 5.333-5.333 5.333a3 3 0 0 1-3-3c0-4 5.333-2.666 5.333-5.666a2 2 0 1 0-4 0c0 2 1.667 5.666 8 8.666m-2-5.333h2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
