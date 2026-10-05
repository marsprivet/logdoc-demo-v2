import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Rotate3D', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#rotate-3d_svg__a)",
		children: jsx("path", {
			d: "M10.977 5C10.428 2.825 9.301 1.333 8 1.333 6.159 1.333 4.666 4.318 4.666 8S6.16 14.667 8 14.667c.228 0 .451-.046.666-.134m1.463-5.395 2.543 1.24-1.24 2.543m1.234-2.541c-1.202.59-2.849.953-4.666.953-3.682 0-6.667-1.492-6.667-3.333 0-1.84 2.985-3.333 6.667-3.333 3.225 0 5.915 1.145 6.533 2.666",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "rotate-3d_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
