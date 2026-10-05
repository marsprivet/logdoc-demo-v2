import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('HandPlatter', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#hand-platter_svg__a)",
		children: jsx("path", {
			d: "M8 2v-.667M3.333 6.667a4.733 4.733 0 0 1 9.333 0m-10 0h10.667m-12 2.666h8a1.333 1.333 0 1 1 0 2.667H8m2.266-.4L12.4 9.733a1.344 1.344 0 0 1 1.866 1.934l-2.4 2.2c-.466.533-1.133.8-1.866.8H7.333c-.733 0-1.4-.267-1.867-.8L3.333 12m0-2.667V14h-2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "hand-platter_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
