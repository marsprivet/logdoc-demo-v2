import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TrendingDown', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 11.333 9 5.667 5.666 9 1.333 4.667m13.333 6.666h-4m4 0v-4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
