import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Footprints', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.667 11.333h2.667M2.667 8.667h2.667m-2.667 2V9.08C2.667 7.667 1.98 7 2 5.333c.02-1.813.994-4 3-4 1.247 0 1.667 1.2 1.667 2.334 0 2.073-1.333 3.773-1.333 5.786v1.214a1.333 1.333 0 1 1-2.667 0Zm10.667 2.666v-1.586c0-1.414.686-2.08.666-3.747-.02-1.813-.993-4-3-4-1.246 0-1.666 1.2-1.666 2.333 0 2.074 1.333 3.774 1.333 5.787v1.213a1.333 1.333 0 0 0 2.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
