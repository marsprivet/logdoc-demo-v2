import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlignStartVertical', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-start-vertical_svg__a)",
		children: jsx("path", {
			d: "M1.333 1.333v13.334m4-5.334h3.333c.737 0 1.334.597 1.334 1.334V12c0 .736-.597 1.333-1.334 1.333H5.333A1.333 1.333 0 0 1 4 12v-1.333c0-.737.597-1.334 1.333-1.334Zm0-6.666h8c.736 0 1.333.597 1.333 1.333v1.333c0 .737-.597 1.334-1.333 1.334h-8A1.333 1.333 0 0 1 4 5.333V4c0-.736.597-1.333 1.333-1.333Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-start-vertical_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
