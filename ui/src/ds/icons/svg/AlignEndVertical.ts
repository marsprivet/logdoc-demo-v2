import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlignEndVertical', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-end-vertical_svg__a)",
		children: jsx("path", {
			d: "M14.666 14.667V1.333m-12 1.334h8C11.403 2.667 12 3.264 12 4v1.333c0 .737-.597 1.334-1.334 1.334h-8a1.333 1.333 0 0 1-1.333-1.334V4c0-.736.597-1.333 1.333-1.333Zm4.667 6.666h3.333c.737 0 1.334.597 1.334 1.334V12c0 .736-.597 1.333-1.334 1.333H7.333A1.333 1.333 0 0 1 6 12v-1.333c0-.737.597-1.334 1.333-1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-end-vertical_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
