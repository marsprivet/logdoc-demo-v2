import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Gem', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 6 12 2H4L1.333 6m13.333 0L8 14.667M14.666 6H1.333M8 14.667 1.333 6M8 14.667 5.333 6l2-4M8 14.667 10.666 6l-2-4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
