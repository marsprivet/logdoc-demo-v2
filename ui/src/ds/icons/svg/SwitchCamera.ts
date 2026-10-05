import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SwitchCamera', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#switch-camera_svg__a)",
		children: jsx("path", {
			d: "M7.333 12.667H2.666a1.333 1.333 0 0 1-1.333-1.334V4.667a1.333 1.333 0 0 1 1.333-1.334H6m0 0-2-2m2 2-2 2m4.666-2h4.667a1.333 1.333 0 0 1 1.333 1.334v6.666a1.333 1.333 0 0 1-1.333 1.334H10m0 0 2 2m-2-2 2-2M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "switch-camera_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
