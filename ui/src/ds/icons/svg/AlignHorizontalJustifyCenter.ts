import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlignHorizontalJustifyCenter', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-horizontal-justify-center_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v13.334M2.666 3.333H4c.736 0 1.333.597 1.333 1.334v6.666c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334V4.667c0-.737.597-1.334 1.333-1.334ZM12 4.667h1.333c.736 0 1.333.597 1.333 1.333v4c0 .736-.597 1.333-1.333 1.333H12A1.333 1.333 0 0 1 10.666 10V6c0-.736.597-1.333 1.334-1.333Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-horizontal-justify-center_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
