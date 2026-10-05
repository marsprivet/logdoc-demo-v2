import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('DiamondPercent', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#diamond-percent_svg__a)",
		children: jsx("path", {
			d: "M6.134 6.133h.006m3.527.2L6.334 9.667m3.466.2h.007m-8.007-3a1.607 1.607 0 0 0 0 2.273l5.06 5.06a1.605 1.605 0 0 0 2.274 0l5.06-5.06a1.606 1.606 0 0 0 0-2.273l-5.06-5.06a1.607 1.607 0 0 0-2.274 0L1.8 6.867Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "diamond-percent_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
