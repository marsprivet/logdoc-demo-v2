import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Shell', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.333 7.333a1.333 1.333 0 0 1-2.667 0 2.667 2.667 0 1 1 5.334 0 4 4 0 1 1-8 0 5.333 5.333 0 0 1 10.666 0 6.667 6.667 0 1 1-13.333 0A7.953 7.953 0 0 1 2.946 2.52a1.333 1.333 0 1 1 2.107 1.627",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
