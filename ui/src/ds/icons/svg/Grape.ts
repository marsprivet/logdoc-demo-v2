import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Grape', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#grape_svg__a)",
		children: jsx("path", {
			d: "M14.666 3.333v-2L10.74 5.26m2.326 5.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.66-5.66a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2.827 2.834a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.04-3.867a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14.1 6.727a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6.373 8.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9.2 11.627a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-3.867 1.04a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "grape_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
