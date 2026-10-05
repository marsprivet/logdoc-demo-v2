import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Cpu', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cpu_svg__a)",
		children: jsx("path", {
			d: "M10 1.333v1.334m0 10.666v1.334M1.333 10h1.333M1.333 6h1.333m10.667 4h1.333m-1.333-4h1.333M6 1.333v1.334m0 10.666v1.334m-2-12h8c.736 0 1.333.597 1.333 1.333v8c0 .736-.597 1.333-1.333 1.333H4A1.333 1.333 0 0 1 2.666 12V4c0-.736.597-1.333 1.334-1.333ZM6.666 6h2.667c.368 0 .667.298.667.667v2.666a.667.667 0 0 1-.667.667H6.666A.667.667 0 0 1 6 9.333V6.667C6 6.298 6.298 6 6.666 6Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cpu_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
