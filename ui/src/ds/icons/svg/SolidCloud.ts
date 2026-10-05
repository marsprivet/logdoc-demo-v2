import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SolidCloud', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.667 12.667H6a4.666 4.666 0 1 1 4.474-6h1.193a3 3 0 0 1 0 6Z",
		fill: "#fff",
		stroke: "#fff",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
