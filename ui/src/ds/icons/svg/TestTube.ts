import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TestTube', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.667 1.333V13A1.65 1.65 0 0 1 8 14.667 1.65 1.65 0 0 1 6.334 13V1.333m-.667 0h4.667m-.667 9.334H6.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
