import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Wheat', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#wheat_svg__a)",
		children: jsx("path", {
			d: "m1.333 14.667 9.333-9.334m0 0H12a2.667 2.667 0 0 0 2.666-2.666V1.333h-1.333A2.667 2.667 0 0 0 10.666 4v1.333Zm-6.313 6.314a2.333 2.333 0 0 0 0-3.294l-1.02-1.02-1.02 1.02a2.333 2.333 0 0 0 0 3.294l1.02 1.02m1.02-1.02-1.02 1.02m1.02-1.02a2.333 2.333 0 0 1 3.293 0l1.02 1.02-1.02 1.02a2.333 2.333 0 0 1-3.293 0l-1.02-1.02M7.02 8.98a2.333 2.333 0 0 0 0-3.293L6 4.667l-1.02 1.02a2.333 2.333 0 0 0 0 3.293L6 10m1.02-1.02L6 10m1.02-1.02a2.333 2.333 0 0 1 3.293 0l1.02 1.02-1.02 1.02a2.333 2.333 0 0 1-3.293 0L6 10m3.686-3.687a2.333 2.333 0 0 0 0-3.293L8.666 2l-1.02 1.02a2.333 2.333 0 0 0 0 3.293l1.02 1.02m1.02-1.02-1.02 1.02m1.02-1.02a2.333 2.333 0 0 1 3.294 0L14 7.333l-1.02 1.02a2.333 2.333 0 0 1-3.294 0l-1.02-1.02",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "wheat_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
