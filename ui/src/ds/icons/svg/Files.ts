import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Files', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.333 4.667h-2A1.333 1.333 0 0 1 10 3.333v-2M2 5.067V13.6a1.066 1.066 0 0 0 1.067 1.067H9.6M6 12a1.334 1.334 0 0 1-1.333-1.333v-8A1.333 1.333 0 0 1 6 1.333h4.667L13.333 4v6.667A1.333 1.333 0 0 1 12 12H6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
