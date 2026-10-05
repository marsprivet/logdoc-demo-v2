import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TentTree', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#tent-tree_svg__a)",
		children: jsx("path", {
			d: "m9.333 3.333 2-2m0 0 2 2m-2-2v8m-2-2.666 2-2 2 2m-2 2.666H4.666l-3.333 5.334h13.333l-3.333-5.334Zm-6 0v5.334M6 9.333l3.333 5.334M4 2.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "tent-tree_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
