import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CloudSunRain', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cloud-sun-rain_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v1.334m-4.714.62.94.94M13.333 8h1.333m-1.953-4.713-.94.94m-1.142 4.206a2.666 2.666 0 0 0-3.95-2.752M2 13.333a3.333 3.333 0 1 1 5.933-2.666h.733A2 2 0 0 1 10 14.16m-2.667-.827v1.334m-2.667-2V14",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cloud-sun-rain_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
