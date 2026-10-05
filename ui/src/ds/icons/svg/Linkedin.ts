import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Linkedin', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.666 5.333a4 4 0 0 1 4 4V14H12V9.333a1.333 1.333 0 0 0-2.667 0V14H6.666V9.333a4 4 0 0 1 4-4ZM4 6H1.333v8H4V6ZM2.666 4a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
