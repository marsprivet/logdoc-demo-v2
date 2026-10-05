import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FileDigit', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 14.667H12a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.334 1.334v2.666m6.667-4V4a1.333 1.333 0 0 0 1.333 1.333h2.667M6.666 8H8v4m-1.334 0h2.667M2.666 8C3.403 8 4 8.597 4 9.333v1.334a1.333 1.333 0 1 1-2.667 0V9.333C1.333 8.597 1.93 8 2.666 8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
