import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ListTree', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 8H8.667M14 4H5.333M14 12H8.667M2 4v2.667m0 0C2 7.4 2.6 8 3.333 8h2M2 6.667v4C2 11.4 2.6 12 3.333 12h2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
