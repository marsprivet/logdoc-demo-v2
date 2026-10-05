import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CircleDotDashed', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#circle-dot-dashed_svg__a)",
		children: jsx("path", {
			d: "M6.733 1.453a6.62 6.62 0 0 1 2.534 0m2.466 1.02a6.634 6.634 0 0 1 1.794 1.8m1.02 2.46a6.62 6.62 0 0 1 0 2.534m-1.02 2.466a6.632 6.632 0 0 1-1.8 1.794m-2.46 1.02a6.623 6.623 0 0 1-2.534 0m-2.466-1.02a6.632 6.632 0 0 1-1.794-1.8m-1.02-2.46a6.62 6.62 0 0 1 0-2.534m1.02-2.466a6.633 6.633 0 0 1 1.8-1.794M8.667 8a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "circle-dot-dashed_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
