import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PersonStanding', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m6 13.333 2-4m0 0 2 4m-2-4V6.667M4 5.333l4 1.334m0 0 4-1.334m-3.333-2a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
