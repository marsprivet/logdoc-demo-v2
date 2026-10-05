import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Waypoints', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#waypoints_svg__a)",
		children: jsx("path", {
			d: "M6.8 4.2 4.2 6.8M4.666 8a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0Zm0 0h6.667m0 0a1.667 1.667 0 1 0 3.333 0 1.667 1.667 0 0 0-3.333 0ZM9.2 11.8l2.6-2.6M9.666 3a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0Zm0 10a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "waypoints_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
