import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TableColumnsSplit', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#table-columns-split_svg__a)",
		children: jsx("path", {
			d: "M9.333 9.333v1.334m0 2.666v1.334m0-13.334v1.334m0 2.666v1.334m-8 3.333h5.333M1.333 2h4a1.333 1.333 0 0 1 1.333 1.333v9.334A1.333 1.333 0 0 1 5.333 14h-4m0-8h5.333m8 4H12m2.666-8h-1.333A1.333 1.333 0 0 0 12 3.333v9.334A1.333 1.333 0 0 0 13.333 14h1.333m0-8H12M3.333 2v12",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "table-columns-split_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
