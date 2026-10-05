import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Repeat1', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 1.333 14 4m0 0-2.667 2.667M14 4H4.667A2.667 2.667 0 0 0 2 6.667v.666m2.667 7.334L2 12m0 0 2.667-2.667M2 12h9.333A2.667 2.667 0 0 0 14 9.333v-.666m-6.667-2H8v2.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
