import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ShowerHead', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2.667 2.667 1.667 1.666m4.666 0A3.3 3.3 0 0 0 4.334 9M10 3.333 3.334 10m6 1.333v.007m-2.667-.673v.006m2-2.006v.006m2-2.006v.006m-3.333 6.66v.007m4-4.007v.007m2-2.007v.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
