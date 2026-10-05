import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CopyX', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#copy-x_svg__a)",
		children: jsx("path", {
			d: "m8 8 4 4m-4 0 4-4m-9.334 2.667c-.733 0-1.333-.6-1.333-1.334V2.667c0-.734.6-1.334 1.333-1.334h6.667c.733 0 1.333.6 1.333 1.334m-4 2.666h6.667c.736 0 1.333.597 1.333 1.334v6.666c0 .737-.597 1.334-1.333 1.334H6.666a1.333 1.333 0 0 1-1.333-1.334V6.667c0-.737.597-1.334 1.333-1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "copy-x_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
