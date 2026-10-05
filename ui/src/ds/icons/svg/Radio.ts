import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Radio', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.266 12.733c-2.6-2.6-2.6-6.866 0-9.466M5.2 10.8c-1.534-1.533-1.534-4.067 0-5.667m5.6.067c1.533 1.533 1.533 4.067 0 5.667m1.933-7.6c2.6 2.6 2.6 6.8 0 9.4M9.333 8a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
