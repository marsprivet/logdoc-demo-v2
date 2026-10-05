import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Euro', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 6.667h8m-8 2.666h6m4-5.333A5.133 5.133 0 0 0 9.2 2.667 5.267 5.267 0 0 0 4 8c0 2.933 2.334 5.333 5.2 5.333 1.334 0 2.534-.533 3.467-1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
