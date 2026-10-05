import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Dna', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#dna_svg__a)",
		children: jsx("path", {
			d: "m6.666 10.667 1 1m1.667-6.334-1-1m1.667-3C8.8 2.665 8.32 3.997 8.128 5.33M11 7l.666.667M11.333 4 9.406 2.073M1.333 10c4.445-4 8.889 0 13.333-4m-1.333 0 .594.594M2.072 9.406l.594.594m1.667-1.667L5 9m-.334 3 1.928 1.927m-.594.74c1.198-1.332 1.678-2.664 1.871-3.996",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "dna_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
