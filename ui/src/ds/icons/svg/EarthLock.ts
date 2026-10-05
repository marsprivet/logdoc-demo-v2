import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('EarthLock', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#earth-lock_svg__a)",
		children: jsx("path", {
			d: "M4.667 2.227v1.106a2 2 0 0 0 2 2m.667 9.3V12A1.333 1.333 0 0 0 6 10.667a1.333 1.333 0 0 1-1.333-1.334v-.666a1.333 1.333 0 0 0-1.333-1.334H1.367M10 14.36v-3.027A1.333 1.333 0 0 1 11.334 10h3.026A6.667 6.667 0 1 1 8 1.333M13.334 4V2.667a1.334 1.334 0 0 0-2.667 0V4M10 4h4c.368 0 .667.298.667.667v2a.667.667 0 0 1-.667.666h-4a.667.667 0 0 1-.666-.666v-2c0-.369.298-.667.666-.667Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "earth-lock_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
