import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('EarOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#ear-off_svg__a)",
		children: jsx("path", {
			d: "M4 12.333a2.333 2.333 0 0 0 4.666 0c0-1.046.614-1.68 1.36-2.306M4 5.667c0-.5.086-.98.24-1.427M5.866 2.1a4.333 4.333 0 0 1 6.8 3.567c0 1.086-.293 1.873-.726 2.506M8.333 4A1.667 1.667 0 0 1 10 5.667m-3.334 3A1.333 1.333 0 0 0 7.88 7.88M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "ear-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
