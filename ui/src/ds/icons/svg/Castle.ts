import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Castle', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#castle_svg__a)",
		children: jsx("path", {
			d: "M14.666 7.333v6a1.333 1.333 0 0 1-1.333 1.334H2.666a1.334 1.334 0 0 1-1.333-1.334v-6m13.333 0H1.333m13.333 0V6M1.333 7.333V6M12 7.333V2.667m0 0H4m8 0V1.333M4 2.667v4.666m0-4.666V1.333m6 13.334V12a2 2 0 0 0-4 0v2.667m.666-12V1.333m2.667 1.334V1.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "castle_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
