import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Pencil', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pencil_svg__a)",
		children: jsx("path", {
			d: "M10 3.333 12.666 6m1.45-1.459a1.879 1.879 0 1 0-2.658-2.658l-8.897 8.9c-.155.154-.27.344-.333.553l-.881 2.901a.334.334 0 0 0 .415.415l2.902-.88c.21-.063.4-.177.554-.331l8.898-8.9Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pencil_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
