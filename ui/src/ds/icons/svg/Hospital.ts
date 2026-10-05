import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Hospital', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#hospital_svg__a)",
		children: jsx("path", {
			d: "M8 4v2.667m1.333 2.666H6.666M9.333 12H6.666m2.667-6.667H6.666M12 8h1.333a1.333 1.333 0 0 1 1.333 1.333v4a1.333 1.333 0 0 1-1.333 1.334H2.666a1.334 1.334 0 0 1-1.333-1.334v-6A1.333 1.333 0 0 1 2.666 6H4m8 8.667v-12a1.333 1.333 0 0 0-1.334-1.334H5.333A1.333 1.333 0 0 0 4 2.667v12",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "hospital_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
