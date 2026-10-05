import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Cannabis', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cannabis_svg__a)",
		children: jsx("path", {
			d: "M8 14.667V12m0 0c-1 1-2.334 2-4 2 0-1 .333-2.333 1.333-3.333 0 0-1.667.333-4-.667.333-1 2.333-2 3.333-2C3.666 7.333 2 5.333 2 4c1.666 0 3.666 1 4.666 2C6.666 4.333 7 2.667 8 1.333c1 1.334 1.333 3 1.333 4.667 1-1 3-2 4.667-2 0 1.333-1.667 3.333-2.667 4 1 0 3 1 3.333 2-2.333 1-4 .667-4 .667C11.666 11.667 12 13 12 14c-1.667 0-3-1-4-2Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cannabis_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
