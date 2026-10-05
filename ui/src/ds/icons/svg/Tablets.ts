import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Tablets', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#tablets_svg__a)",
		children: jsx("path", {
			d: "M14.666 11.333a3.333 3.333 0 1 1-6.666 0m6.666 0a3.333 3.333 0 1 0-6.666 0m6.666 0H8M2.306 7.027l4.72-4.72M8 4.667a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "tablets_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
