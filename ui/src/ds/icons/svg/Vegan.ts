import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Vegan', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#vegan_svg__a)",
		children: jsx("path", {
			d: "M1.333 1.333A17.734 17.734 0 0 1 8 14.667c.6-4.547 1-6.334 2.666-9.334m0 0c2.667 0 4-1.333 4-4-2.666 0-4 1.334-4 4Zm.94-2.933a6.666 6.666 0 1 0 2 2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "vegan_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
