import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('GitCompareArrows', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v4.667A1.333 1.333 0 0 0 4.666 12H8m0-8h3.333a1.333 1.333 0 0 1 1.333 1.333V10M8 4l2 2M8 4l2-2m2.666 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 12l-2-2m2 2-2 2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
