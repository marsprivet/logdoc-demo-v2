import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BellElectric', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bell-electric_svg__a)",
		children: jsx("path", {
			d: "M12.533 2.667c.51.97.79 2.134.8 3.333M6 6h.006m3.327 6.667c2 0 3.067-1.067 3.067-1.067M10.666 6a4.667 4.667 0 1 1-9.333 0 4.667 4.667 0 0 1 9.333 0ZM4 10.667h4c.736 0 1.333.597 1.333 1.333v1.333c0 .737-.597 1.334-1.333 1.334H4a1.333 1.333 0 0 1-1.334-1.334V12c0-.736.597-1.333 1.334-1.333Zm10.666 0a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bell-electric_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
