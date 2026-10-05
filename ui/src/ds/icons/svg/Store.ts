import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Store', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#store_svg__a)",
		children: jsx("path", {
			d: "m1.333 4.667 2.94-2.94a1.333 1.333 0 0 1 .947-.394h5.56a1.333 1.333 0 0 1 .946.394l2.94 2.94m-13.333 0h13.333m-13.333 0v2A1.333 1.333 0 0 0 2.666 8m12-3.333v2A1.333 1.333 0 0 1 13.333 8M2.666 8v5.333A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.333-1.334V8M2.666 8a1.8 1.8 0 0 0 1.06-.42.467.467 0 0 1 .547 0 1.8 1.8 0 0 0 1.06.42 1.8 1.8 0 0 0 1.06-.42.467.467 0 0 1 .547 0A1.8 1.8 0 0 0 8 8a1.8 1.8 0 0 0 1.06-.42.467.467 0 0 1 .546 0 1.8 1.8 0 0 0 1.06.42 1.8 1.8 0 0 0 1.06-.42.467.467 0 0 1 .547 0 1.8 1.8 0 0 0 1.06.42M10 14.667V12a1.333 1.333 0 0 0-1.334-1.333H7.333A1.333 1.333 0 0 0 6 12v2.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "store_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
