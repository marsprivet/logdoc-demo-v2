import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Threshold', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [
		jsx("path", {
			d: "M2 2v10.667A1.333 1.333 0 0 0 3.333 14H14",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		jsx("path", {
			d: "m4.667 6.862 2.097-2.293a.333.333 0 0 1 .472 0l2.195 2.195a.334.334 0 0 0 .472 0l2.861-2.861",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round"
		}),
		jsx("path", {
			d: "M2.667 10h11.667",
			stroke: "inherit",
			strokeWidth: 1.333,
			strokeLinecap: "round",
			strokeDasharray: "2.67 2.67"
		})
	]
}),
);
