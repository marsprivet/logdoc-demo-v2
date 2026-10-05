import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ArrowUpZA', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2 5.333 2.667-2.666m0 0 2.666 2.666M4.667 2.667v10.666M10 2.667h3.333l-3.333 4h3.333M10 13.333V11a1.666 1.666 0 1 1 3.333 0v2.333m0-1.333H10",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
