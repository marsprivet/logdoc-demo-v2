import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Backpack', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 4V2.667a1.333 1.333 0 0 1 1.334-1.334h1.333A1.333 1.333 0 0 1 10 2.667V4M5.334 14v-3.333a1.333 1.333 0 0 1 1.333-1.334h2.667a1.333 1.333 0 0 1 1.333 1.334V14M5.334 6.667h5.333M5.334 12h5.333m-8-5.333A2.667 2.667 0 0 1 5.334 4h5.333a2.667 2.667 0 0 1 2.667 2.667v6.666A1.333 1.333 0 0 1 12 14.667H4a1.333 1.333 0 0 1-1.333-1.334V6.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
