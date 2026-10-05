import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Network', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#network_svg__a)",
		children: jsx("path", {
			d: "M3.333 10.667v-2A.667.667 0 0 1 4 8h8a.667.667 0 0 1 .666.667v2M8 8V5.333m3.333 5.334H14c.368 0 .666.298.666.666V14a.667.667 0 0 1-.666.667h-2.667a.667.667 0 0 1-.667-.667v-2.667c0-.368.299-.666.667-.666Zm-9.333 0h2.666c.369 0 .667.298.667.666V14a.667.667 0 0 1-.667.667H2A.667.667 0 0 1 1.333 14v-2.667c0-.368.298-.666.667-.666Zm4.666-9.334h2.667c.368 0 .667.299.667.667v2.667a.667.667 0 0 1-.667.666H6.666A.667.667 0 0 1 6 4.667V2c0-.368.298-.667.666-.667Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "network_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
