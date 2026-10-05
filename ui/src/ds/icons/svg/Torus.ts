import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Torus', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M8 8.667c1.104 0 2-.597 2-1.334C10 6.597 9.104 6 8 6c-1.105 0-2 .597-2 1.333 0 .737.895 1.334 2 1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M8 14c3.682 0 6.666-2.537 6.666-5.667S11.682 2.667 8 2.667c-3.682 0-6.667 2.537-6.667 5.666C1.333 11.463 4.318 14 8 14Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
