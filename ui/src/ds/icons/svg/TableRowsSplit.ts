import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TableRowsSplit', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#table-rows-split_svg__a)",
		children: jsx("path", {
			d: "M9.333 6.667h1.333m-.666 8V9.333m0-8V4M1.333 6.667h1.333m10.667 0h1.333M2 12.667h12m-12 2v-4a1.334 1.334 0 0 1 1.333-1.334h9.333A1.334 1.334 0 0 1 14 10.667v4M2 1.333v1.334A1.333 1.333 0 0 0 3.333 4h9.333A1.333 1.333 0 0 0 14 2.667V1.333M5.333 6.667h1.333m-.666 8V9.333m0-8V4",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "table-rows-split_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
