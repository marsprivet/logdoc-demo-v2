import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Cloudy', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.667 6.667a2 2 0 0 0-2-2h-1.471A3.668 3.668 0 0 0 4.06 5m7.606 9H6a4.666 4.666 0 1 1 4.474-6h1.193a3 3 0 0 1 0 6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
