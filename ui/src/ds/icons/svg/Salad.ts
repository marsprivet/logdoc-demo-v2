import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Salad', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 14h6.666M7.587 8a1.6 1.6 0 0 1-.267-3.18 1.6 1.6 0 0 1 2.133-1.847 1.6 1.6 0 0 1 2.314-.42A1.6 1.6 0 0 1 14.013 4.8a1.598 1.598 0 0 1-.733 2.467c.06.24.068.49.02.733M8.667 8l2.666-2.667m-4.066-.5a2.66 2.66 0 0 0-4.6 1.834c0 .486.133.94.36 1.333M8 14a6 6 0 0 0 6-6H2a6 6 0 0 0 6 6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
