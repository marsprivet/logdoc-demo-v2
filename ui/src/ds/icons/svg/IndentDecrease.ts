import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('IndentDecrease', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 5.333 2 8l2.667 2.667M14 8H7.333M14 4H7.333M14 12H7.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
