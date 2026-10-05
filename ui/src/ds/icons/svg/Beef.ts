import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Beef', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m12.334 4 1.46 3c.138.43.208.88.206 1.333a4.327 4.327 0 0 1-1.733 3.467c-2 1.667-4.933 2.867-7.6 2.867A2 2 0 0 1 2.88 13.56L1.6 11M10 5.667a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0ZM8.334 1.333A4.333 4.333 0 0 0 4.187 4.4c-.733 2.087-.52 2.6-2.12 4.053A2 2 0 0 0 3.334 12c2.666 0 5.6-1.2 7.6-2.867a4.334 4.334 0 0 0-2.6-7.8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
