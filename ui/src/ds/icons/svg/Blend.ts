import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Blend', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#blend_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", { d: "M6 10.667a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334Z" }), jsx("path", { d: "M10 14.667a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334Z" })]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "blend_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
