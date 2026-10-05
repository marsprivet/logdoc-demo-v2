import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('IterationCw', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 6.667c0-2.934 2.4-5.334 5.333-5.334 2.934 0 5.334 2.4 5.334 5.334C13.334 9.6 10.934 12 8 12H2.667m0 0 2.667 2.667M2.667 12l2.667-2.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
