import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Pointer', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pointer_svg__a)",
		children: jsx("path", {
			d: "M6.666 6.667V6a1.333 1.333 0 0 1 2.667 0v.667a1.333 1.333 0 1 1 2.667 0v.666a1.333 1.333 0 0 1 2.666 0v2a5.333 5.333 0 0 1-5.333 5.334H8c-1.867 0-3-.574-3.994-1.56l-2.4-2.4a1.334 1.334 0 0 1 1.887-1.88L4.666 10m2-3.667V2.667a1.333 1.333 0 0 0-2.666 0v6.666",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pointer_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
