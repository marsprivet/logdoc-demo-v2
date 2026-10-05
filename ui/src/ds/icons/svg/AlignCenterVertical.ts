import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlignCenterVertical', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-center-vertical_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v13.334m-2.667-8H2.666a1.333 1.333 0 0 1-1.333-1.334V4c0-.733.6-1.333 1.333-1.333h2.667m5.333 4h2.667a1.333 1.333 0 0 0 1.333-1.334V4a1.333 1.333 0 0 0-1.333-1.333h-2.667M5.333 13.333h-.667A1.333 1.333 0 0 1 3.333 12v-1.333c0-.734.6-1.334 1.333-1.334h.667m5.333 0h.667a1.333 1.333 0 0 1 1.333 1.334V12a1.333 1.333 0 0 1-1.333 1.333h-.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-center-vertical_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
