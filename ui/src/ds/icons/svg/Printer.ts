import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Printer', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#printer_svg__a)",
		children: jsx("path", {
			d: "M4 12H2.666a1.334 1.334 0 0 1-1.333-1.333V7.333A1.333 1.333 0 0 1 2.666 6h10.667a1.333 1.333 0 0 1 1.333 1.333v3.334A1.333 1.333 0 0 1 13.333 12H12M4 6V2a.667.667 0 0 1 .666-.667h6.667A.667.667 0 0 1 12 2v4M4.666 9.333h6.667c.368 0 .667.299.667.667v4a.667.667 0 0 1-.667.667H4.666A.667.667 0 0 1 4 14v-4c0-.368.298-.667.666-.667Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "printer_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
