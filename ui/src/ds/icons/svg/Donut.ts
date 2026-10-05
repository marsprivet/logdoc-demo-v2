import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Donut', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#donut_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", { d: "M13.666 6.667a1.666 1.666 0 0 1-1.6-2H12a1.967 1.967 0 0 1-1.734-2.934 6.667 6.667 0 1 0 4.2 4.734c-.2.133-.533.2-.8.2Z" }), jsx("path", { d: "M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" })]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "donut_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
