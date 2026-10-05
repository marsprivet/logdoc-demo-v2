import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CircleDashed', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#circle-dashed_svg__a)",
		children: jsx("path", {
			d: "M6.733 1.455a6.667 6.667 0 0 1 2.533 0m0 13.09a6.667 6.667 0 0 1-2.533 0M11.74 2.481a6.665 6.665 0 0 1 1.793 1.8M1.454 9.267a6.667 6.667 0 0 1 0-2.534M13.52 11.74a6.668 6.668 0 0 1-1.8 1.794m2.826-6.8a6.667 6.667 0 0 1 0 2.534M2.48 4.26a6.667 6.667 0 0 1 1.8-1.794M4.26 13.52a6.667 6.667 0 0 1-1.793-1.8",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "circle-dashed_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
