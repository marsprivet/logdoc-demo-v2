import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('UserRoundCheck', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 14a5.333 5.333 0 0 1 8.861-4m.472 2.667L12 14l2.666-2.667m-4.666-6a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
