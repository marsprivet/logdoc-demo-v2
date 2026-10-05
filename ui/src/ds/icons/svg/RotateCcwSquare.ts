import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('RotateCcwSquare', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.334 6V4.667A1.333 1.333 0 0 0 12 3.333H8m0 0 2-2m-2 2 2 2m3.334 3.334V12A1.333 1.333 0 0 1 12 13.333H4A1.333 1.333 0 0 1 2.667 12V4.667A1.333 1.333 0 0 1 4 3.333h1.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
