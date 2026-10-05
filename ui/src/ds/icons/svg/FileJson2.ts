import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FileJson2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 14.667H12a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.334 1.334v2.666m6.667-4V4a1.333 1.333 0 0 0 1.333 1.333h2.667M2.666 8A.667.667 0 0 0 2 8.667v.666a.667.667 0 0 1-.667.667.667.667 0 0 1 .667.667v.666a.667.667 0 0 0 .666.667m2.667 0A.667.667 0 0 0 6 11.333v-.666A.667.667 0 0 1 6.666 10 .667.667 0 0 1 6 9.333v-.666A.667.667 0 0 0 5.333 8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
