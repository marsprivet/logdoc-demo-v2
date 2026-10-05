import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Cross', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cross_svg__a)",
		children: jsx("path", {
			d: "M7.333 1.333A1.333 1.333 0 0 0 6 2.667V6H2.666a1.333 1.333 0 0 0-1.333 1.333v1.334c0 .733.6 1.333 1.333 1.333H6v3.333c0 .734.6 1.334 1.333 1.334h1.333A1.333 1.333 0 0 0 10 13.333V10h3.333a1.333 1.333 0 0 0 1.333-1.333V7.333A1.333 1.333 0 0 0 13.333 6H10V2.667a1.333 1.333 0 0 0-1.334-1.334H7.333Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cross_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
