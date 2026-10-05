import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('WineOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#wine-off_svg__a)",
		children: jsx("path", {
			d: "M5.333 14.667h5.333m-6-8h2m-2 0a8.22 8.22 0 0 1 .205-1.796m-.205 1.796a3.333 3.333 0 0 0 4.928 2.927m1.739-2.927h-.895m.895 0C11.333 5.333 11 4 10 1.333H6c-.086.227-.167.446-.242.654m5.575 4.68c0 .271-.033.539-.097.798M8 10v4.667M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "wine-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
