import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Medal', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#medal_svg__a)",
		children: jsx("path", {
			d: "M4.806 10 1.773 4.76a1.333 1.333 0 0 1 .087-1.467l1.073-1.426A1.333 1.333 0 0 1 4 1.333h8a1.333 1.333 0 0 1 1.066.534l1.067 1.426a1.334 1.334 0 0 1 .093 1.467L11.193 10m-3.86-2-3.92-6.533M8.666 8l3.92-6.533m-7.253 3.2h5.333M8 12v-1.333h-.334m3.667.666a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "medal_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
