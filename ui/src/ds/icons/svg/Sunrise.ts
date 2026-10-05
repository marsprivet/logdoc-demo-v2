import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Sunrise', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#sunrise_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v5.334m0-5.334L5.333 4M8 1.333 10.666 4m-7.38 3.287.94.94M1.333 12h1.333m10.667 0h1.333m-1.953-4.713-.94.94m2.893 6.44H1.333M10.666 12a2.667 2.667 0 1 0-5.333 0",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "sunrise_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
