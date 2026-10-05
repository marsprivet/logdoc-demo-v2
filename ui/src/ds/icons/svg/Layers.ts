import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Layers', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#layers_svg__a)",
		children: jsx("path", {
			d: "M14.666 11.767 8.553 14.54a1.334 1.334 0 0 1-1.107 0l-6.113-2.773m13.333-3.334-6.113 2.774a1.334 1.334 0 0 1-1.107 0L1.333 8.433m7.22-6.98a1.333 1.333 0 0 0-1.107 0l-5.713 2.6a.667.667 0 0 0 0 1.22l5.72 2.607a1.333 1.333 0 0 0 1.107 0l5.72-2.6a.667.667 0 0 0 0-1.22L8.553 1.453Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "layers_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
