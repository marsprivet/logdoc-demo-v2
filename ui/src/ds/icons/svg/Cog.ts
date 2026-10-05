import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Cog', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cog_svg__a)",
		children: jsx("path", {
			d: "M8 13.333A5.333 5.333 0 1 0 8 2.667m0 10.666A5.333 5.333 0 0 1 2.666 8M8 13.333v1.334m0-12A5.333 5.333 0 0 0 2.666 8M8 2.667V1.333M2.666 8H1.333m8 0a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Zm0 0h5.333m-3.333 5.773-.667-1.153M7.333 6.847l-2.667-4.62m9.107 9.106-1.153-.666m-10.394-6 1.154.666m10.393-.666-1.153.666m-10.394 6 1.154-.666m7.953-8.44-.667 1.153M7.333 9.153l-2.667 4.62",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cog_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
