import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Dumbbell', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#dumbbell_svg__a)",
		children: jsx("path", {
			d: "M9.6 9.6 6.4 6.4m7.934 7.933L13.4 13.4M2.6 2.6l-.933-.933m10.771 12.656a1.333 1.333 0 1 1-1.886-1.885l-1.178 1.179a1.334 1.334 0 0 1-1.886-1.886l4.243-4.243a1.334 1.334 0 0 1 1.886 1.886l-1.179 1.178a1.334 1.334 0 0 1 1.885 1.886l-1.885 1.885ZM4.27 8.512a1.334 1.334 0 1 1-1.886-1.886l1.178-1.178a1.333 1.333 0 1 1-1.885-1.886l1.885-1.885a1.333 1.333 0 1 1 1.886 1.885l1.178-1.179A1.334 1.334 0 1 1 8.512 4.27L4.27 8.512Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "dumbbell_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
