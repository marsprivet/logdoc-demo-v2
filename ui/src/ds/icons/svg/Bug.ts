import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Bug', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m5.333 1.333 1.253 1.254m2.827 0 1.253-1.254M6 4.753v-.666a2.002 2.002 0 1 1 4 0v.666m-2 8.58c-2.2 0-4-1.8-4-4v-2a2.667 2.667 0 0 1 2.666-2.666h2.667A2.667 2.667 0 0 1 12 7.333v2c0 2.2-1.8 4-4 4Zm0 0v-6M4.353 6C3.066 5.867 2 4.733 2 3.333m2 5.334H1.333M2 14c0-1.4 1.133-2.6 2.533-2.667m9.447-8c0 1.4-1.067 2.534-2.334 2.667m3.02 2.667H12m-.534 2.666C12.866 11.4 14 12.6 14 14",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
