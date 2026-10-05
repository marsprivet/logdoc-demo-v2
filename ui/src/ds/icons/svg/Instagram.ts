import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Instagram', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#instagram_svg__a)",
		children: jsx("path", {
			d: "M11.666 4.333h.007m-7.007-3h6.667a3.333 3.333 0 0 1 3.333 3.334v6.666a3.333 3.333 0 0 1-3.333 3.334H4.666a3.333 3.333 0 0 1-3.333-3.334V4.667a3.333 3.333 0 0 1 3.333-3.334Zm6 6.247a2.667 2.667 0 1 1-5.275.782 2.667 2.667 0 0 1 5.275-.782Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "instagram_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
