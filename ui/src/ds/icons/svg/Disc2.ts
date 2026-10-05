import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Disc2', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#disc-2_svg__a)",
		children: jsx("path", {
			d: "M8 8h.006m6.66 0A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.333 0Zm-4 0a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "disc-2_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
