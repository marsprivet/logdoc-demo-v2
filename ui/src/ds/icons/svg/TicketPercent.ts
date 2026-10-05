import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TicketPercent', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 6h.006M10 6l-4 4m4 0h.006M1.333 6a2 2 0 0 1 0 4v1.333a1.333 1.333 0 0 0 1.333 1.334h10.667a1.333 1.333 0 0 0 1.333-1.334V10a2 2 0 0 1 0-4V4.667a1.333 1.333 0 0 0-1.333-1.334H2.666a1.333 1.333 0 0 0-1.333 1.334V6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
