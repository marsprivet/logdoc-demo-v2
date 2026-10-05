import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TramFront', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 7.333h10.667M8 2v5.333m-2.666 5.334-1.334 2m8 0-1.333-2M5.334 10h.006m5.327 0h.007M4 2h8c.737 0 1.334.597 1.334 1.333v8c0 .737-.597 1.334-1.334 1.334H4a1.333 1.333 0 0 1-1.333-1.334v-8C2.667 2.597 3.264 2 4 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
