import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('GlobeLock', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#globe-lock_svg__a)",
		children: jsx("path", {
			d: "M10.457 10A9.666 9.666 0 0 1 8 14.667 9.666 9.666 0 0 1 8 1.333 6.667 6.667 0 1 0 14.36 10M1.333 8H7m6.333-4V2.667a1.334 1.334 0 0 0-2.667 0V4M10 4h4c.368 0 .666.298.666.667v2a.667.667 0 0 1-.666.666h-4a.667.667 0 0 1-.667-.666v-2c0-.369.298-.667.667-.667Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "globe-lock_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
