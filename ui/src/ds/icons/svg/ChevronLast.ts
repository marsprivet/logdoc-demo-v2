import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ChevronLast', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m4.667 12 4-4-4-4m6.667 0v8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
