import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('HardDriveDownload', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#hard-drive-download_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v5.334m0 0L10.666 4M8 6.667 5.333 4M4 12h.006m2.66 0h.007M2.666 9.333h10.667c.736 0 1.333.597 1.333 1.334v2.666c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334v-2.666c0-.737.597-1.334 1.333-1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "hard-drive-download_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
