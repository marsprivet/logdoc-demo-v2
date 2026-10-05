import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Regex', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.333 2v6.667m-2.886-5L14.22 7M8.447 7l5.773-3.333M6 11.333A1.333 1.333 0 0 0 4.667 10H3.333A1.334 1.334 0 0 0 2 11.333v1.334A1.333 1.333 0 0 0 3.333 14h1.334A1.334 1.334 0 0 0 6 12.667v-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
