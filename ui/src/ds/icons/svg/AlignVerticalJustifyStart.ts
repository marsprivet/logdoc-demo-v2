import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignVerticalJustifyStart', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-vertical-justify-start_svg__a)",
		children: jsx("path", {
			d: "M1.333 1.333h13.333m-10 9.334h6.667c.736 0 1.333.597 1.333 1.333v1.333c0 .737-.597 1.334-1.333 1.334H4.666a1.333 1.333 0 0 1-1.333-1.334V12c0-.736.597-1.333 1.333-1.333ZM6 4h4c.736 0 1.333.597 1.333 1.333v1.334C11.333 7.403 10.736 8 10 8H6a1.333 1.333 0 0 1-1.334-1.333V5.333C4.666 4.597 5.263 4 6 4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-vertical-justify-start_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
