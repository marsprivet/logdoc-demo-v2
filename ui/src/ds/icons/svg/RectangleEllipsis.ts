import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('RectangleEllipsis', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8h.006m3.327 0h.007M4.666 8h.007M2.666 4h10.667c.736 0 1.333.597 1.333 1.333v5.334c0 .736-.597 1.333-1.333 1.333H2.666a1.333 1.333 0 0 1-1.333-1.333V5.333C1.333 4.597 1.93 4 2.666 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
