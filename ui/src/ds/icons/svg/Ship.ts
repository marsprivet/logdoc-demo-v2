import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Ship', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#ship_svg__a)",
		children: jsx("path", {
			d: "M1.333 14c.4.333.8.667 1.667.667 1.666 0 1.666-1.334 3.333-1.334.867 0 1.267.334 1.667.667.4.333.8.667 1.666.667 1.667 0 1.667-1.334 3.334-1.334.866 0 1.266.334 1.666.667m-1.746-.667a7.733 7.733 0 0 0 1.08-4L8 6.667m0 0L2 9.333c0 1.934.626 3.56 1.873 5.174M8 6.667v2.666m4.666-.666v-4a1.333 1.333 0 0 0-1.333-1.334H4.666a1.333 1.333 0 0 0-1.333 1.334v4M8 1.333v2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "ship_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
