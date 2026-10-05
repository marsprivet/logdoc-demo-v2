import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PocketKnife', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pocket-knife_svg__a)",
		children: jsx("path", {
			d: "M2 1.333V2c0 .667 1.334.667 1.334 1.333C3.334 4 2 4 2 4.667 2 5.333 3.334 5.333 3.334 6 3.334 6.667 2 6.667 2 7.333 2 8 3.334 8 3.334 8.667M12 4h.007M4 12h.007M12 7.773v6.894A2.667 2.667 0 0 0 14.667 12V4m-.78 1.887a2.668 2.668 0 1 0-3.774-3.774l-8 8a2.668 2.668 0 0 0 3.774 3.774l8-8Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pocket-knife_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
