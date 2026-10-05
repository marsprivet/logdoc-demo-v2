import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('KeyboardOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#keyboard-off_svg__a)",
		children: jsx("path", {
			d: "M14.666 10.94V4a1.333 1.333 0 0 0-1.333-1.333H6.46m-1.794 8h6M9.333 5.333h.007m2.66 0h.006m-10.673-4 13.333 13.334m-1.333-1.334H2.666A1.333 1.333 0 0 1 1.333 12V4a1.333 1.333 0 0 1 1.333-1.333M4 5.333h.006M5.333 8h.007",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "keyboard-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
