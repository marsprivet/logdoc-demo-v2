import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CloudSun', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cloud-sun_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v1.334m-4.713.62.94.94M13.333 8h1.334m-1.954-4.713-.94.94m-1.142 4.206a2.666 2.666 0 0 0-3.95-2.752m1.986 8.986h-4a3.333 3.333 0 1 1 3.266-4h.734a2 2 0 0 1 0 4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cloud-sun_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
