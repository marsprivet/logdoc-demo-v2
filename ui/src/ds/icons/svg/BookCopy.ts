import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BookCopy', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#book-copy_svg__a)",
		children: jsx("path", {
			d: "M1.333 10.667v-8a1.333 1.333 0 0 1 1.333-1.334H10m-8.667 9.334a1.333 1.333 0 0 1 1.333-1.334h.667m-2 1.334A1.333 1.333 0 0 0 2.666 12h.667m11.333 0H7.333A1.333 1.333 0 0 0 6 13.333m0 0a1.333 1.333 0 0 0 1.333 1.334h7a.333.333 0 0 0 .333-.334v-10A.333.333 0 0 0 14.333 4h-7A1.333 1.333 0 0 0 6 5.333v8Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "book-copy_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
