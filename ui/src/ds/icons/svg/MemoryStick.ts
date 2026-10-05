import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MemoryStick', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 12.667v-2m2.666 2v-2m2.667 2v-2m2.667 2v-2M5.333 7.333V6m5.333 1.333V6M8 7.333V6m-6.667 4h13.333M1.333 4.667a1.333 1.333 0 0 1 1.333-1.334h10.667a1.333 1.333 0 0 1 1.333 1.334V5.4a1.333 1.333 0 0 0 0 2.558v3.375a1.333 1.333 0 0 1-1.333 1.334H2.666a1.334 1.334 0 0 1-1.333-1.334v-3.4a1.333 1.333 0 0 0 0-2.558v-.708Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
