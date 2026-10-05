import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('List', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 4H14M5.333 8H14m-8.667 4H14M2 4h.007M2 8h.007M2 12h.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
