import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PointerOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pointer-off_svg__a)",
		children: jsx("path", {
			d: "M6.667 3v-.333A1.333 1.333 0 0 0 5.06 1.362M9.267 5.6a1.334 1.334 0 0 0-.84-.863m6.04 6.063c.134-.477.202-.97.2-1.467v-2a1.334 1.334 0 0 0-2.667 0v-.666a1.333 1.333 0 0 0-2.42-.772M4.667 10l-1.2-1.2a1.333 1.333 0 0 0-1.86 1.907L4 13.133a5.159 5.159 0 0 0 4 1.534h1.334a5.334 5.334 0 0 0 3.77-1.562M4 4v5.333m-2.666-8 13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pointer-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
