import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Layers3', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#layers-3_svg__a)",
		children: jsx("path", {
			d: "M4.054 6.333 1.72 7.4a.667.667 0 0 0 0 1.207l5.734 2.606a1.333 1.333 0 0 0 1.1 0l5.72-2.6a.667.667 0 0 0 0-1.22l-2.334-1.06M4.054 9.667 1.72 10.733a.667.667 0 0 0 0 1.207l5.734 2.607a1.334 1.334 0 0 0 1.1 0l5.72-2.6a.667.667 0 0 0 0-1.22l-2.334-1.06M8.554 1.453a1.333 1.333 0 0 0-1.107 0l-5.713 2.6a.667.667 0 0 0 0 1.22l5.72 2.607a1.333 1.333 0 0 0 1.106 0l5.72-2.6a.667.667 0 0 0 0-1.22L8.554 1.453Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "layers-3_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
