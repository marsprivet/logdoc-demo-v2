import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Compass', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#compass_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", { d: "M10.826 5.173 9.624 8.781a1.333 1.333 0 0 1-.844.843l-3.607 1.203 1.203-3.608a1.333 1.333 0 0 1 .843-.843l3.607-1.203Z" }), jsx("path", { d: "M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z" })]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "compass_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
