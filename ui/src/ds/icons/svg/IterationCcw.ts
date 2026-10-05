import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('IterationCcw', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.334 6.667c0-2.934-2.4-5.334-5.334-5.334-2.933 0-5.333 2.4-5.333 5.334C2.667 9.6 5.067 12 8 12h5.334m0 0-2.667-2.667M13.334 12l-2.667 2.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
