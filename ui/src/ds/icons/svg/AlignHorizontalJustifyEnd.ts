import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlignHorizontalJustifyEnd', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-horizontal-justify-end_svg__a)",
		children: jsx("path", {
			d: "M14.666 1.333v13.334m-12-11.334H4c.736 0 1.333.597 1.333 1.334v6.666c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334V4.667c0-.737.597-1.334 1.333-1.334Zm6.667 1.334h1.333C11.403 4.667 12 5.264 12 6v4c0 .736-.597 1.333-1.334 1.333H9.333A1.333 1.333 0 0 1 8 10V6c0-.736.597-1.333 1.333-1.333Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-horizontal-justify-end_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
