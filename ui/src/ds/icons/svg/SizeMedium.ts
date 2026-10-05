import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SizeMedium', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#size-medium_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: jsx("path", { d: "M11.63 3.333H4.37c-.573 0-1.037.465-1.037 1.037v7.26c0 .572.464 1.037 1.037 1.037h7.26c.572 0 1.036-.465 1.036-1.037V4.37c0-.572-.464-1.037-1.037-1.037ZM1.333 1.333h.007M4 1.333h.007M6.667 1.333h.007M9.333 1.333h.007M12 1.333h.007M14.667 1.333h.007M1.333 4h.007M14.667 4h.007M1.333 6.667h.007M14.667 6.667h.007M1.333 9.333h.007M14.667 9.333h.007M1.333 12h.007M14.667 12h.007M1.333 14.667h.007M4 14.667h.007M6.667 14.667h.007M9.333 14.667h.007M12 14.667h.007M14.667 14.667h.007" })
	}), jsx("defs", { children: jsx("clipPath", {
		id: "size-medium_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
