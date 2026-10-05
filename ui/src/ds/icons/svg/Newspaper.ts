import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Newspaper', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#newspaper_svg__a)",
		children: jsx("path", {
			d: "M2.666 14.667h10.667a1.333 1.333 0 0 0 1.333-1.334V2.667a1.333 1.333 0 0 0-1.333-1.334h-8A1.333 1.333 0 0 0 4 2.667v10.666a1.333 1.333 0 0 1-1.334 1.334Zm0 0a1.334 1.334 0 0 1-1.333-1.334v-6C1.333 6.6 1.933 6 2.666 6H4m8 3.333H6.666M10 12H6.666m0-8H12v2.667H6.666V4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "newspaper_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
