import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Fan', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#fan_svg__a)",
		children: jsx("path", {
			d: "M8 8v.007m-.782 2.912a4.055 4.055 0 0 1-5.745-4.668l3.608.967A4.055 4.055 0 0 1 9.75 1.473L8.782 5.08a4.055 4.055 0 0 1 5.746 4.668l-3.608-.967a4.055 4.055 0 0 1-4.668 5.745l.966-3.608Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "fan_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
