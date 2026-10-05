import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('HousePlug', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 8V5.976M9.333 8V5.976M5.667 14H3.333A1.334 1.334 0 0 1 2 12.667v-6a1.333 1.333 0 0 1 .473-1.019l4.666-4a1.333 1.333 0 0 1 1.722 0l4.666 4A1.332 1.332 0 0 1 14 6.667v6A1.334 1.334 0 0 1 12.667 14H9.333A1.334 1.334 0 0 1 8 12.667v-1.334M10 8a.667.667 0 0 1 .667.667V10a1.333 1.333 0 0 1-1.334 1.333H6.667A1.333 1.333 0 0 1 5.333 10V8.667A.667.667 0 0 1 6 8h4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
