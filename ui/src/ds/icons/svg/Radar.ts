import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Radar', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#radar_svg__a)",
		children: jsx("path", {
			d: "M4.66 2.227a6.667 6.667 0 0 1 8.053 1.06L8.94 7.06M2.666 4h.007M1.526 6.413a6.667 6.667 0 1 0 12.68-.846m-3.38-.394a4 4 0 1 0-5.34 5.94M8 12h.006m3.987-4.227a4 4 0 0 1-1.48 3.34M9.333 8a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "radar_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
