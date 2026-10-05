import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Crown', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 14h9.334M7.708 2.177a.333.333 0 0 1 .584 0l1.968 3.736a.666.666 0 0 0 1.01.196l2.852-2.442a.333.333 0 0 1 .532.346l-1.89 6.83a.666.666 0 0 1-.637.49H3.873a.667.667 0 0 1-.638-.49l-1.888-6.83a.333.333 0 0 1 .532-.346l2.85 2.443a.667.667 0 0 0 1.011-.196l1.968-3.737Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
