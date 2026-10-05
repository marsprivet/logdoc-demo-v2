import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PenTool', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pen-tool_svg__a)",
		children: jsx("path", {
			d: "m12 8.667-.917-4.583a.667.667 0 0 0-.497-.517l-8.43-2.215a.667.667 0 0 0-.804.805l2.214 8.429a.667.667 0 0 0 .518.497L8.666 12M1.533 1.533 6.39 6.391m4.081 7.804a.666.666 0 0 1-.943 0l-1.057-1.057a.667.667 0 0 1 0-.943l3.724-3.724a.667.667 0 0 1 .943 0l1.057 1.058a.667.667 0 0 1 0 .942l-3.724 3.724ZM8.666 7.333a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pen-tool_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
