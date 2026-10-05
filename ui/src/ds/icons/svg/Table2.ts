import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Table2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 2H3.333A1.333 1.333 0 0 0 2 3.333V6m4-4h6.667A1.333 1.333 0 0 1 14 3.333V6M6 2v12M2 6v6.667A1.333 1.333 0 0 0 3.333 14H6M2 6h12m0 0v6.667A1.334 1.334 0 0 1 12.667 14H6",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
