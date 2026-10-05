import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Laugh', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#laugh_svg__a)",
		children: jsx("path", {
			d: "M6 6h.006M10 6h.006m4.66 2A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.333 0ZM12 8.667A4 4 0 0 1 8 12a4 4 0 0 1-4-3.333h8Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "laugh_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
