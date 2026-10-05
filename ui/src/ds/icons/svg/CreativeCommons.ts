import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CreativeCommons', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#creative-commons_svg__a)",
		children: jsx("path", {
			d: "M6.666 6.2a1.867 1.867 0 0 0-2.333.667 2.067 2.067 0 0 0 0 2.266 1.8 1.8 0 0 0 2.333.667m4.667-3.6A1.867 1.867 0 0 0 9 6.867a2.067 2.067 0 0 0 0 2.266 1.8 1.8 0 0 0 2.333.667M14.666 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.333 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "creative-commons_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
