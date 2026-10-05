import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Bean', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bean_svg__a)",
		children: jsx("path", {
			d: "M3.56 7.08a2.667 2.667 0 1 0 3.52-3.52m-.304.839C6.636 4.985 6.426 5.573 6 6c-.427.427-1.014.636-1.602.777a4 4 0 0 0 .935 7.89 9.333 9.333 0 0 0 9.333-9.334 4 4 0 0 0-7.89-.934Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bean_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
