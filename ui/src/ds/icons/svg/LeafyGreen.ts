import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('LeafyGreen', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#leafy-green_svg__a)",
		children: jsx("path", {
			d: "M1.333 14.667c.834-.658 1.514-1.317 2.6-1.467.941 0 1.847.357 2.534 1a2.666 2.666 0 0 0 4.124-1.569 2.333 2.333 0 0 0 2.46-3.41 2.334 2.334 0 0 0 .916-3.888 2.332 2.332 0 0 0-1.65-3.983c-.62 0-1.213.246-1.65.683a2.333 2.333 0 0 0-3.888.916 2.333 2.333 0 0 0-3.41 2.46 2.667 2.667 0 0 0-1.566 4.103c.53.768 1.136 1.63.997 2.555-.183 1.095-.79 1.754-1.467 2.6Zm0 0 10-10",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "leafy-green_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
