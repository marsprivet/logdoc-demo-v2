import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('EggOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#egg-off_svg__a)",
		children: jsx("path", {
			d: "M4.266 4.266C3.574 5.438 3.1 6.793 3 8c-.247 2.953.846 6.633 5 6.667 2.17-.018 3.506-1.032 4.25-2.417m.771-3A9.38 9.38 0 0 0 13 8c-.24-2.893-2.634-6.64-5-6.667-.694.008-1.388.335-2.031.865m-4.636-.865 13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "egg-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
