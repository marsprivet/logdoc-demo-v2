import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FlagOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#flag-off_svg__a)",
		children: jsx("path", {
			d: "M5.333 1.333c2 0 3.333 1.334 5.333 1.334S13.333 2 13.333 2v7.333M2.666 14.667v-12m0 7.333s.667-.667 2.667-.667c2 0 3.333 1.334 5.333 1.334M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "flag-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
