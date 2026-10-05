import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Citrus', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#citrus_svg__a)",
		children: jsx("path", {
			d: "M13.1 10.44a5.333 5.333 0 0 1-7.533-7.547m3.766 3.774-3.666 3.666m3.666-3.666V11.9m0-5.233H4.1m10.34 5.113a.718.718 0 0 1-.027 1.067 8 8 0 0 1-11.26-11.26.733.733 0 0 1 1.074-.027L14.44 11.78Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "citrus_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
