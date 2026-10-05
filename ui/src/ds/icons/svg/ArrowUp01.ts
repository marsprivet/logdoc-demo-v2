import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ArrowUp01', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2 5.333 2.667-2.666m0 0 2.666 2.666M4.667 2.667v10.666m6.666 0v-4H10m0 4h2.667M11.333 2.667c.737 0 1.334.597 1.334 1.333v1.333a1.333 1.333 0 0 1-2.667 0V4c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
