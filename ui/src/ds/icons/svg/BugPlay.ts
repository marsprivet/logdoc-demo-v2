import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BugPlay', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m9.413 2.587 1.253-1.254m1.334 6a2.667 2.667 0 0 0-2.667-2.666H6.666A2.667 2.667 0 0 0 4 7.333v2a4.067 4.067 0 0 0 1.333 3m8.647-9c0 1.4-1.067 2.534-2.334 2.667M2 14c0-1.4 1.133-2.6 2.533-2.667M4 8.667H1.333M4.353 6C3.066 5.867 2 4.733 2 3.333m3.333-2 1.253 1.254M6 4.753v-.666a2.002 2.002 0 1 1 4 0v.666m-1.49 9.595a.333.333 0 0 1-.51-.283V8.601a.333.333 0 0 1 .51-.282l3.918 2.449a.667.667 0 0 1 0 1.13l-3.918 2.45Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
