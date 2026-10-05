import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Repeat2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m1.333 6 2-2m0 0 2 2m-2-2v6.667A1.333 1.333 0 0 0 4.666 12h4m6-2-2 2m0 0-2-2m2 2V5.333A1.333 1.333 0 0 0 11.333 4h-4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
