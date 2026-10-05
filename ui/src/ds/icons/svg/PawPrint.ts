import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PawPrint', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#paw-print_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: jsx("path", { d: "M7.334 4a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM12 6.667A1.333 1.333 0 1 0 12 4a1.333 1.333 0 0 0 0 2.667ZM13.334 12a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM6 6.667A3.333 3.333 0 0 1 9.334 10v2.333a2.333 2.333 0 0 1-4.56.697c-.285-.918-.885-1.519-1.8-1.803a2.333 2.333 0 0 1 .693-4.56H6Z" })
	}), jsx("defs", { children: jsx("clipPath", {
		id: "paw-print_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
