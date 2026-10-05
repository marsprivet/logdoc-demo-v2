import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('RotateCw', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 8a6 6 0 1 1-6-6c1.68 0 3.287.667 4.493 1.827L14 5.333m0 0V2m0 3.333h-3.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
