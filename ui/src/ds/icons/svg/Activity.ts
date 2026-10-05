import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Activity', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#activity_svg__a)",
		children: jsx("path", {
			d: "M14.666 8h-1.653a1.333 1.333 0 0 0-1.287.973l-1.566 5.574a.167.167 0 0 1-.26.086.167.167 0 0 1-.06-.086L6.16 1.453a.167.167 0 0 0-.32 0L4.273 7.027A1.333 1.333 0 0 1 2.993 8h-1.66",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "activity_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
