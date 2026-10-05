import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ThumbsDown', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#thumbs-down_svg__a)",
		children: jsx("path", {
			d: "M11.333 9.333v-8M6 12.08l.666-2.747H2.78A1.333 1.333 0 0 1 1.5 7.627l1.553-5.334a1.333 1.333 0 0 1 1.28-.96h9a1.333 1.333 0 0 1 1.333 1.334V8a1.334 1.334 0 0 1-1.333 1.333h-1.84a1.333 1.333 0 0 0-1.193.74L8 14.667a2.087 2.087 0 0 1-2-2.587Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "thumbs-down_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
