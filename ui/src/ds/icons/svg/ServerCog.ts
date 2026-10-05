import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ServerCog', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#server-cog_svg__a)",
		children: jsx("path", {
			d: "M3 6.667h-.334a1.333 1.333 0 0 1-1.333-1.334V2.667a1.333 1.333 0 0 1 1.333-1.334h10.667a1.333 1.333 0 0 1 1.333 1.334v2.666a1.333 1.333 0 0 1-1.333 1.334H13M3 9.333h-.334a1.333 1.333 0 0 0-1.333 1.334v2.666a1.333 1.333 0 0 0 1.333 1.334h10.667a1.333 1.333 0 0 0 1.333-1.334v-2.666a1.333 1.333 0 0 0-1.333-1.334H13M4 4h.006M4 12h.006m6.46-3.067-.6-.2M6.133 7.267l-.6-.2m1.533 3.4.2-.6m1.8.6L8.8 9.8M7.2 6.2l-.267-.667m-1.4 3.534L6.2 8.8m3.6-1.6.666-.267m-1.533-1.4-.2.6M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "server-cog_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
