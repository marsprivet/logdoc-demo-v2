import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PrinterCheck', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#printer-check_svg__a)",
		children: jsx("path", {
			d: "M9 14.667H4.666A.667.667 0 0 1 4 14v-4a.667.667 0 0 1 .666-.667h6.667A.667.667 0 0 1 12 10v.333m-1.334 2.334L12 14l2.666-2.667M4 12H2.666a1.334 1.334 0 0 1-1.333-1.333V7.333A1.333 1.333 0 0 1 2.666 6h10.667a1.333 1.333 0 0 1 1.333 1.333v1.334M4 6V2a.667.667 0 0 1 .666-.667h6.667A.667.667 0 0 1 12 2v4",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "printer-check_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
