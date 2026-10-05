import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FileAudio', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.666 14.667H12a1.333 1.333 0 0 0 1.333-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.334 1.334v2m6.667-3.334V4a1.333 1.333 0 0 0 1.333 1.333h2.667m-12 7.334a1.333 1.333 0 0 1 2.667 0v.666a1.333 1.333 0 1 1-2.667 0v-2.666a4 4 0 0 1 8 0v2.666a1.333 1.333 0 1 1-2.667 0v-.666a1.333 1.333 0 0 1 2.667 0",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
