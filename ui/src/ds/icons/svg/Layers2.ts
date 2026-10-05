import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Layers2', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#layers-2_svg__a)",
		children: jsx("path", {
			d: "m10.68 8 3.654 2.087a.666.666 0 0 1 0 1.16l-5.667 3.246a1.333 1.333 0 0 1-1.333 0l-5.667-3.246a.667.667 0 0 1 0-1.16L5.32 8m3.347 1.16a1.333 1.333 0 0 1-1.333 0L1.667 5.913a.667.667 0 0 1 0-1.16l5.667-3.246a1.333 1.333 0 0 1 1.333 0l5.667 3.246a.666.666 0 0 1 0 1.16L8.667 9.16Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "layers-2_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
