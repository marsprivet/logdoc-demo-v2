import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BellRing', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bell-ring_svg__a)",
		children: jsx("path", {
			d: "M6.866 14a1.293 1.293 0 0 0 2.267 0M2.666 1.333c-.8 1.134-1.333 2.467-1.333 4m13.333 0c0-1.533-.533-2.866-1.333-4M4 5.333a4 4 0 0 1 8 0c0 4.667 2 6 2 6H2s2-1.333 2-6Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bell-ring_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
