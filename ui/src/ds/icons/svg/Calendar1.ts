import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Calendar1', (l) =>
	jsxs("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...l,
	children: [jsx("path", { d: "M11 14h1v4M16 2v4M3 10h18M8 2v4" }), jsx("rect", {
		x: 3,
		y: 4,
		width: 18,
		height: 18,
		rx: 2
	})]
}),
);
