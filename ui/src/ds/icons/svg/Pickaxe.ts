import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Pickaxe', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m9.687 8.313-5.275 5.274a1.414 1.414 0 0 1-2-2l5.275-5.275m2.77-3.436a8.333 8.333 0 0 0-6.817-.904.667.667 0 0 0 .08 1.168 14.667 14.667 0 0 1 4.212 2.262m5.192.14a8.334 8.334 0 0 1 .904 6.817.666.666 0 0 1-1.168-.079 14.669 14.669 0 0 0-2.262-4.213m1.202-5.6a.667.667 0 0 0-.934 0L7.8 5.533a.667.667 0 0 0 0 .934L9.533 8.2a.667.667 0 0 0 .933 0l3.067-3.067a.666.666 0 0 0 0-.933L11.8 2.467Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
