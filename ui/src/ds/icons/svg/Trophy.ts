import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Trophy', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#trophy_svg__a)",
		children: jsx("path", {
			d: "M4 6H3a1.667 1.667 0 1 1 0-3.333h1M4 6V1.333h8V6M4 6a4 4 0 1 0 8 0m0 0h1a1.667 1.667 0 0 0 0-3.333h-1m-9.334 12h10.667M6.666 9.773v1.56c0 .367-.313.654-.646.807-.787.36-1.354 1.353-1.354 2.527m4.667-4.894v1.56c0 .367.313.654.647.807.786.36 1.353 1.353 1.353 2.527",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "trophy_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
