import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PaintRoller', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#paint-roller_svg__a)",
		children: jsx("path", {
			d: "M6.666 10.667V9.333A1.333 1.333 0 0 1 8 8h5.333a1.333 1.333 0 0 0 1.333-1.333v-2a1.333 1.333 0 0 0-1.333-1.334H12m-9.334-2h8c.737 0 1.334.597 1.334 1.334V4c0 .736-.597 1.333-1.334 1.333h-8A1.333 1.333 0 0 1 1.333 4V2.667c0-.737.597-1.334 1.333-1.334ZM6 10.667h1.333c.368 0 .667.298.667.666V14a.667.667 0 0 1-.667.667H6A.667.667 0 0 1 5.333 14v-2.667c0-.368.298-.666.667-.666Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "paint-roller_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
