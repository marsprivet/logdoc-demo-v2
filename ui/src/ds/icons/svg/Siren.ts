import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Siren', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#siren_svg__a)",
		children: jsx("path", {
			d: "M4.666 12V8a3.333 3.333 0 0 1 6.667 0v4m-6.667 0h6.667m-6.667 0a1.334 1.334 0 0 0-1.333 1.333V14a.667.667 0 0 0 .667.667h8a.667.667 0 0 0 .666-.667v-.667A1.333 1.333 0 0 0 11.333 12M14 8h.666m-2.333-5L12 3.333M1.333 8H2m6-6.667V2M3.286 3.286l.471.471M8 8v4",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "siren_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
