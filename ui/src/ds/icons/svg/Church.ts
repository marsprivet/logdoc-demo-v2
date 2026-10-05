import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Church', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#church_svg__a)",
		children: jsx("path", {
			d: "M6.666 6h2.667M8 4.667V8m1.333 6.667V12a1.333 1.333 0 1 0-2.667 0v2.667m5.334 0V3.745a.667.667 0 0 0-.369-.596L8.596 1.631a1.333 1.333 0 0 0-1.192 0L4.368 3.15A.667.667 0 0 0 4 3.745v10.922m8-10 2.298 1.149a.667.667 0 0 1 .368.596v6.921a1.333 1.333 0 0 1-1.333 1.334H2.666a1.334 1.334 0 0 1-1.333-1.334V6.412a.667.667 0 0 1 .369-.596L4 4.666",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "church_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
