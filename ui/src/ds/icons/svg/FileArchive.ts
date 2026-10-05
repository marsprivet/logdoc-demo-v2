import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FileArchive', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 8v-.667m0 4.667v-1.333m0 1.333a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667Zm0-7.333V4m2.667-2.667V4a1.333 1.333 0 0 0 1.333 1.333h2.667m-3 9.334H12a1.333 1.333 0 0 0 1.334-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.333 1.334v10.666c0 .237.063.47.183.674",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
