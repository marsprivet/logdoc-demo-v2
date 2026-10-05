import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Carrot', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#carrot_svg__a)",
		children: jsx("path", {
			d: "m5.76 9.333-1.366-1.36M10.227 10l-1.64-1.64M10 6s1.24-1.333 2.334-1.333C13.78 4.667 14.667 6 14.667 6s-.887 1.333-2.333 1.333C10.887 7.333 10 6 10 6Zm0 0s-1.333-.887-1.333-2.333C8.667 2.22 10 1.333 10 1.333s1.334.887 1.334 2.334C11.334 4.773 10 6 10 6Zm-8.486 8.467s6.58-2.334 8.486-4.24a2.998 2.998 0 0 0 .004-4.244A3.001 3.001 0 0 0 5.76 5.98c-1.913 1.913-4.246 8.487-4.246 8.487Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "carrot_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
