import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('RefreshCcwDot', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 1.333v4m0 0h4m-4 0 2-1.8A6 6 0 0 1 14 8m0 6.667v-4m0 0h-4m4 0-2 1.8A6.001 6.001 0 0 1 2 8m6.667 0a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
