import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Piano', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#piano_svg__a)",
		children: jsx("path", {
			d: "M1.333 9.333h13.334M4 9.333V12m2.667-2.667V12m2.666-2.667V12M12 9.333V12m.333-6.667A2.375 2.375 0 0 1 10.2 4a4.58 4.58 0 0 0-8.867 2v7.333a1.333 1.333 0 0 0 1.334 1.334h10.666a1.333 1.333 0 0 0 1.334-1.334V7.667c0-1.267-1.067-2.334-2.334-2.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "piano_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
