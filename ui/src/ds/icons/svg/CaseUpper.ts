import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CaseUpper', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2 10 2.667-5.333L7.333 10M2.667 8.667h4M10 7.333h3A1.333 1.333 0 1 1 13 10h-3V4.667h2.667a1.333 1.333 0 0 1 0 2.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
