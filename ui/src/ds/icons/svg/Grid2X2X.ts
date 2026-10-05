import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Grid2X2X', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 2v11.333a.667.667 0 0 1-.667.667h-4A1.334 1.334 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2h9.334A1.333 1.333 0 0 1 14 3.333v4a.666.666 0 0 1-.667.667H2m8.667 2.667L14 14m-3.333 0L14 10.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
