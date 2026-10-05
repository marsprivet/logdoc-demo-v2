import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Ratio', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#ratio_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", { d: "M10.666 1.333H5.333C4.597 1.333 4 1.93 4 2.667v10.666c0 .737.597 1.334 1.333 1.334h5.333c.737 0 1.334-.597 1.334-1.334V2.667c0-.737-.597-1.334-1.334-1.334Z" }), jsx("path", { d: "M13.333 4H2.666c-.736 0-1.333.597-1.333 1.333v5.334c0 .736.597 1.333 1.333 1.333h10.667c.736 0 1.333-.597 1.333-1.333V5.333c0-.736-.597-1.333-1.333-1.333Z" })]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "ratio_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
