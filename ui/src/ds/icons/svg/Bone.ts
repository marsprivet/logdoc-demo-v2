import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Bone', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bone_svg__a)",
		children: jsx("path", {
			d: "M11.333 6.667c.467-.467 1.127 0 1.667 0a1.667 1.667 0 0 0 0-3.334.333.333 0 0 1-.334-.333 1.667 1.667 0 0 0-3.333 0c0 .54.467 1.2 0 1.667L4.666 9.333c-.466.467-1.126 0-1.666 0a1.667 1.667 0 0 0 0 3.334.33.33 0 0 1 .333.333 1.667 1.667 0 1 0 3.333 0c0-.54-.466-1.2 0-1.667l4.667-4.666Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bone_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
