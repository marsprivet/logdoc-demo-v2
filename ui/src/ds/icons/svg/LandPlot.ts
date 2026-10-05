import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LandPlot', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#land-plot_svg__a)",
		children: jsx("path", {
			d: "m8 5.333 4-2-4-2V8m-2.666-.007-3.667 2.094a.666.666 0 0 0 0 1.16l5.667 3.24a1.334 1.334 0 0 0 1.333 0l5.667-3.24a.667.667 0 0 0 0-1.16L10.667 8m-6.34.567 7.347 4.2m0-4.2-7.34 4.2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "land-plot_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
