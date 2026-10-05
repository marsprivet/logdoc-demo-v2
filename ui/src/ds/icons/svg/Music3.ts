import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Music3', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.666 12a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Zm0 0V1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
