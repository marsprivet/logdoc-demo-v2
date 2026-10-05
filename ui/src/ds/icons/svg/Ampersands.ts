import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Ampersands', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 11.333C3.333 9.333 2 6.667 2 5.333a1.333 1.333 0 0 1 2.666 0c0 1.667-3.333 1.667-3.333 4 0 1.134.867 2 2 2A3.3 3.3 0 0 0 6.666 8m8 3.333c-3.333-2-4.666-4.666-4.666-6a1.334 1.334 0 0 1 2.666 0c0 1.667-3.333 1.667-3.333 4 0 1.134.867 2 2 2A3.3 3.3 0 0 0 14.666 8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
