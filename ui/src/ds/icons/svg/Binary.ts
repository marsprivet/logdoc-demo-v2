import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Binary', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 13.333h2.667m2.666-6.666H12M4 9.333h1.333v4m4-10.666h1.334v4m0 2.666c.736 0 1.333.597 1.333 1.334V12a1.333 1.333 0 0 1-2.667 0v-1.333c0-.737.597-1.334 1.334-1.334ZM5.333 2.667c.737 0 1.334.597 1.334 1.333v1.333a1.333 1.333 0 0 1-2.667 0V4c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
