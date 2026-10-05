import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BadgeHelp', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#badge-help_svg__a)",
		children: jsx("path", {
			d: "M6.06 6a2 2 0 0 1 3.887.667c0 1.333-2 2-2 2M8 11.333h.007m-5.44-5.586a2.667 2.667 0 0 1 3.186-3.18 2.667 2.667 0 0 1 4.494 0 2.666 2.666 0 0 1 3.187 3.186 2.666 2.666 0 0 1 0 4.494 2.667 2.667 0 0 1-3.18 3.186 2.668 2.668 0 0 1-4.5 0 2.667 2.667 0 0 1-3.187-3.18 2.667 2.667 0 0 1 0-4.506Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "badge-help_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
