import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('DecimalsArrowRight', (l) =>
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
	children: [
		jsx("path", { d: "M10 18h10M17 21l3-3-3-3M3 11h.01" }),
		jsx("rect", {
			x: 15,
			y: 3,
			width: 5,
			height: 8,
			rx: 2.5
		}),
		jsx("rect", {
			x: 6,
			y: 3,
			width: 5,
			height: 8,
			rx: 2.5
		})
	]
}),
);
